const app = Vue.createApp({});


// MODAL COMPONENT
app.component("modal-component", {
  props: ["formData", "closeModal"],
  template: `
    <div class="modal">
      <div class="modal-content">
        <h3>Form Submitted ✅</h3>

        <p><strong>Name:</strong> {{ formData.name }}</p>
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>Message:</strong> {{ formData.message }}</p>

        <button @click="closeModal">Close</button>
      </div>
    </div>
  `
});


// CONTACT FORM COMPONENT
app.component("contact-form", {
  props: ["namePlaceholder", "emailPlaceholder", "messagePlaceholder", "buttonText"],

  data() {
    return {
      name: "",
      email: "",
      message: "",
      errors: {
        name: "",
        email: "",
        message: ""
      },
      showModal: false
    };
  },

  computed: {
    isValid() {
      return (
        this.name &&
        this.email &&
        this.message &&
        !this.errors.name &&
        !this.errors.email &&
        !this.errors.message
      );
    }
  },

  methods: {
    validateName() {
      const regex = /^[A-Za-z ]+$/;

      if (!this.name) {
        this.errors.name = "Name is required";
      } else if (!regex.test(this.name)) {
        this.errors.name = "Letters only";
      } else {
        this.errors.name = "";
      }
    },

    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!this.email) {
        this.errors.email = "Email is required";
      } else if (!regex.test(this.email)) {
        this.errors.email = "Invalid email format";
      } else {
        this.errors.email = "";
      }
    },

    validateMessage() {
      if (!this.message) {
        this.errors.message = "Message is required";
      } else if (this.message.length < 10) {
        this.errors.message = "Minimum 10 characters";
      } else {
        this.errors.message = "";
      }
    },

    handleSubmit() {
      this.validateName();
      this.validateEmail();
      this.validateMessage();

      if (this.isValid) {
        this.showModal = true;
      }
    },

    closeModal() {
      this.showModal = false;
      this.name = "";
      this.email = "";
      this.message = "";
    }
  },

  template: `
    <div>
      <form @submit.prevent="handleSubmit">

        <input type="text" v-model="name" :placeholder="namePlaceholder" @input="validateName" />
        <div class="error" v-if="errors.name">{{ errors.name }}</div>

        <input type="email" v-model="email" :placeholder="emailPlaceholder" @input="validateEmail" />
        <div class="error" v-if="errors.email">{{ errors.email }}</div>

        <textarea v-model="message" :placeholder="messagePlaceholder" @input="validateMessage"></textarea>
        <div class="error" v-if="errors.message">{{ errors.message }}</div>

        <button :disabled="!isValid">{{ buttonText }}</button>
      </form>

      <modal-component
        v-if="showModal"
        :formData="{ name, email, message }"
        :closeModal="closeModal"
      ></modal-component>
    </div>
  `
});


app.mount("#app");