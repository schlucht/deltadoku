package fhx

import (
	"bytes"
	"encoding/binary"
	"errors"
	"io"
	"os"
	"path"
	"strings"
	"unicode/utf16"
	"unicode/utf8"
)



// Einlesen der FHX Datei
func Readfhx(file string) ([]string, error) {
	res := []string{}
	if IsFhxFile(file) {
		return res, errors.New("keine fhx datei")
	}

	f, err := os.Open(file)
	var str = ""
	if err != nil {
		return res, err
	}
	defer f.Close()

	buf := make([]byte, 1024)

	i := 0
	for {
		n, err := f.Read(buf)
		i++
		if err == io.EOF {
			break
		}
		if err != nil {
			return res, err
		}
		if n > 0 {
			if !utf8.Valid(buf[:n]) {
				s, err := DecodeUtf16(buf[:n], binary.LittleEndian)
				if err != nil {
					return res, err
				}
				str = str + s
			} else {
				str = str + string(buf[:n])
			}
		}
	}
	return splitFhx(str), nil
}

func DecodeUtf16(b []byte, order binary.ByteOrder) (string, error) {
	ints := make([]uint16, len(b)/2)
	if err := binary.Read(bytes.NewReader(b), order, &ints); err != nil {
		return "", err
	}
	return string(utf16.Decode(ints)), nil
}

func IsFhxFile(pathStr string) bool {
	ext := path.Ext(pathStr)
	return strings.ToUpper(ext) != ".FHX"
}

func splitFhx(txt string) []string {
	return SplitLines(txt)
}

func SplitLines(text string) []string {
	return strings.Split(text, "\n")
}
