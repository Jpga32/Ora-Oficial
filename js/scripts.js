
/* Redirect page */
/* "https://www.mediafire.com/file/0pg10alw7nufvqe/MediaFire_-_Getting_Started.pdf/file" */
 function Ebook(){
  window.location = "https://www.mediafire.com/file/0pg10alw7nufvqe/MediaFire_-_Getting_Started.pdf/file"
 }


/* Formatação do Formspree */
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "✓"
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "U+274C "
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! Houve um problema com o seu envio! Tente novamente mais tarde  "
      });
    }
    form.addEventListener("submit", handleSubmit)
