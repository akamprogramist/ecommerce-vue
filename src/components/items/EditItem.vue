<template>
  <div class="card">
    <div class="card-content mt-5">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <label class="label">Category</label>
      <div class="control mb-3">
        <label class="radio">
          <input type="radio" name="answer" />
          Cars
        </label>
        <label class="radio">
          <input type="radio" name="answer" />
          Clothes
        </label>
        <label class="radio">
          <input type="radio" name="answer" />
          Electronics
        </label>
      </div>

      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>
    </div>
  </div>
</template>
