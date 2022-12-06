package fhx

import (
	"errors"
	"log"
	"regexp"
	"strconv"
	"strings"
)

// ReadBlock liest einen ganzen Bock in einer fhx Datei und schreibt diese in ein Array
// Params: stringStart: Block Name, lines: [fhxText]
// return: [Blockname][Zeilen], error
func ReadBlock(startString string, lines []string) ([][]string, error) {

	results := [][]string{}
	if strings.Trim(startString, "") == "" {
		return results, errors.New("kein suchparameter vorhanden")
	}
	if len(lines) == 0 {
		return results, errors.New("kein text übergeben")
	}

	regParam, _ := regexp.Compile(startString)

	var start = false
	var curlybreak = 0
	var blockLines = []string{}

	for _, l := range lines {

		if start {
			blockLines = append(blockLines, l)
			if strings.Contains(l, "{") {
				sl := strings.Trim(l, " ")
				if len(sl) <= 2 {
					curlybreak++
				}
			}
			if strings.Contains(l, "}") {
				sl := strings.Trim(l, " ")
				if len(sl) <= 2 {
					curlybreak--
					if curlybreak == 0 {
						start = false
						results = append(results, blockLines)
						blockLines = []string{}
					}
				}
			}

		} else {
			start = regParam.MatchString(l)
			if start {
				blockLines = append(blockLines, l)
			}
		}
	}
	return results, nil
}

func ReadRegex(regex map[string]string, txt []string) map[string]interface{} {
	res := make(map[string]interface{})
	for _, l := range txt {
		for key, r := range regex {
			rCompile := regexp.MustCompile(r)
			matches := rCompile.FindStringSubmatch(l)

			if len(matches) > 0 {
				if rCompile.SubexpIndex("s") > -1 {
					res[key] = matches[rCompile.SubexpIndex("s")]
				}
				if rCompile.SubexpIndex("i") > -1 {
					i, err := strconv.ParseInt(matches[rCompile.SubexpIndex("i")], 10, 32)
					if err != nil {
						log.Printf("%v\n", err)
					}
					res[key] = i
				}
				if rCompile.SubexpIndex("b") > -1 {
					b := matches[rCompile.SubexpIndex("b")]
					res[key] = b == "T"
				}
			}
		}
	}
	return res
}

func ReadClassLines(lines []string, start string, end string) []string {
	l := []string{}
	b := false
	for _, v := range lines {
		if strings.Contains(v, start) {
			b = true
			l = append(l, v)
			continue
		}
		if strings.Contains(v, end) {
			return l
		}
		if b {
			l = append(l, v)
		}
	}
	return l
}
