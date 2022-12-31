<script setup></script>
<template>
  <div class="">
    <h2>Anlagen</h2>
    <div class="table">
      <div class="table-row-header">
        <div class="col col-header">Id</div>
        <div class="col col-header">Anlage</div>
        <div class="col col-header">-</div>
      </div>
      <div class="table-row">
        <div class="col col-id">f56+sdafdsa6f6adsf6</div>
        <div class="col col-text">MZA-D29</div>
        <div class="col col-change">
          <button><i class="bi bi-pencil"></i></button>
          <button><i class="bi bi-trash3"></i></button>
        </div>
      </div>
      <div class="table-row">
        <div class="col col-id">f56+sdafdsa6f6adsf6</div>
        <div class="col col-text">MZA-D29</div>
        <div class="col col-change">
          <button><i class="bi bi-pencil"></i></button>
          <button><i class="bi bi-trash3"></i></button>
        </div>
      </div>
      <div class="table-row">
        <div class="col col-id">f56+sdafdsa6f6adsf6</div>
        <div class="col col-text">MZA-D29</div>
        <div class="col col-change">
          <button><i class="bi bi-pencil"></i></button>
          <button><i class="bi bi-trash3"></i></button>
        </div>
      </div>
      <div class="table-footer">
        <button><i class="bi bi-plus-circle-fill"></i>Neu</button>
      </div>
    </div>

    <form class="form">
      <h3>Neue Anlage</h3>
      <div class="control-container">
        <label class="label" for="name">Anlagename:</label>
        <input class="input-text" type="text" id="name">
      </div>
      <div class="control-container">
        <button class="button save"><i class="bi bi-plus-circle-fill"></i>Speichern</button>
        <button class="button cancel">Abbrechen</button>
      </div>
    </form>
    
  </div>
</template>
<style scoped>

</style>