<template>
  <div id="Contact-me">
    <Reactor class="reactor"/>
    <h1 class="contact-title">Let's Connect</h1>
    
    <div class="contact-section">
      <form 
        @submit.prevent="handleSubmit"
        class="contact-form"
      >
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            required 
            placeholder="Your name"
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required 
            placeholder="your.email@example.com"
          />
        </div>
        
        <div class="form-group">
          <label for="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject"
            required 
            placeholder="What's this about?"
          />
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            name="message"
            required 
            rows="6"
            placeholder="Your message here..."
          ></textarea>
        </div>
        
        <button type="submit" :disabled="isSubmitting" class="submit-btn">
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else>Sending...</span>
        </button>
        
        <div v-if="submitStatus.message" :class="['status-message', submitStatus.type]">
          {{ submitStatus.message }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const Store = useStore()
await Store.fetchContact()
let contact = Store.contact || []

const isSubmitting = ref(false)
const submitStatus = reactive({
  message: '',
  type: '' // 'success' or 'error'
})

const handleSubmit = async (event) => {
  isSubmitting.value = true
  submitStatus.message = ''
  submitStatus.type = ''
  
  const formData = new FormData(event.target)
  
  try {
    const response = await fetch('https://formspree.io/f/meonerek', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      submitStatus.message = 'Message sent successfully! I\'ll get back to you soon.'
      submitStatus.type = 'success'
      event.target.reset()
    } else {
      const data = await response.json()
      if (data.errors) {
        submitStatus.message = data.errors.map(error => error.message).join(', ')
      } else {
        submitStatus.message = 'Failed to send message. Please try again.'
      }
      submitStatus.type = 'error'
    }
  } catch (error) {
    console.error('Error sending message:', error)
    submitStatus.message = 'Failed to send message. Please try again or contact me directly.'
    submitStatus.type = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
#Contact-me {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 30px;
}

.contact-title {
  font-family: 'Electrolize', monospace;
  font-size: 3rem;
  color: #00d4ff;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

.contact-section {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
}

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(52, 97, 232, 0.3);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: #67c7eb;
  font-family: 'Electrolize', monospace;
  font-size: 1rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  background: rgba(28, 28, 28, 0.8);
  border: 2px solid rgba(52, 97, 232, 0.5);
  border-radius: 5px;
  color: #67c7eb;
  font-family: 'Electrolize', monospace;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #00d4ff;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(103, 199, 235, 0.5);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #00d4ff, #3461e8);
  border: none;
  border-radius: 5px;
  color: #0a0a0a;
  font-family: 'Electrolize', monospace;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 212, 255, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status-message {
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  font-family: 'Electrolize', monospace;
  font-size: 0.9rem;
}

.status-message.success {
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  color: #00ff00;
}

.status-message.error {
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  color: #ff4444;
}

:is(.Contact-links, .contact-section, .contact-title) {
  position: relative;
  z-index: 1;
}

.Contact {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactor {
  position: absolute;
  z-index: 0;
}
</style>