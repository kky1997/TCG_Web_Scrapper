<template>
  <div>
    <button class="btn btn-success mt-3" @click="emitImage">
      {{ label || 'Pay Jason Wongstein some money' }}
      <slot />
    </button>

    <!-- Sus Image Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content">
        <img :src="imageUrl" alt="sus image" />
      </div>
    </div>
  </div>
</template>
  
  <script setup>

    import { ref } from 'vue';

    const eventType = defineProps(
      {
        label: String,
        type: String
      }
    )

    const showModal = ref(false);

    const imageUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1e57834b-523d-4aba-9218-d0a4bc5c27d4/deo903x-d05b2f27-7f59-41c4-ad31-57b3197030f7.jpg/v1/fit/w_384,h_680,q_70,strp/rich_furry_by_redcrocs_deo903x-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgwIiwicGF0aCI6IlwvZlwvMWU1NzgzNGItNTIzZC00YWJhLTkyMTgtZDBhNGJjNWMyN2Q0XC9kZW85MDN4LWQwNWIyZjI3LTdmNTktNDFjNC1hZDMxLTU3YjMxOTcwMzBmNy5qcGciLCJ3aWR0aCI6Ijw9Mzg0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.SXkP6U3DKwWZ7Jve2rGYwb_1vFHNN2ZQEgP5dgQeKSI';


    const emit = defineEmits(['show-image']);

    function emitImage() {
      switch (eventType.type)
      {
        case 'susphoto':
          showModal.value = true;
          break;
        default:
          emit('show-image'); // Send event
      }
        
    }
  </script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content img {
  max-width: 35%;
  max-height: 80%;
  border-radius: 8px;
  box-shadow: 0 0 20px black;
}
</style>
