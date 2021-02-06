function initMessageForm() {
  const FORMSPREE_FORM = 'meqpdppq';
  const FORMSPREE_POST_URL = `https://formspree.io/f/${FORMSPREE_FORM}`;

  const FORM_ELEMENT = document.getElementById('contact-form');
  const SUCCESS_ELEMENT = document.getElementById('sent-message');
  const ERROR_ELEMENT = document.getElementById('error-message');
  const SPINNER_ELEMENT = document.getElementById('spinner-message');

  const formDataToJson = (formData) => {
    const entries = formData.entries();
    const dataObj = Array.from(entries).reduce((data, [key, value]) => {
      data[key] = value;
      if (key === 'email') {
        data._replyTo = value;
      }
      if (key === 'subject') {
        data._subject = value;
      }
      return data;
    }, {});
    return JSON.stringify(dataObj);
  };

  const toggleSuccess = (bool) => {
    if (bool) {
      SUCCESS_ELEMENT.style.display = 'block';
    } else {
      SUCCESS_ELEMENT.style.display = 'none';
    }
  }

  FORM_ELEMENT.addEventListener('submit', function (event) {
    event.preventDefault();

    SPINNER_ELEMENT.style.display = 'inline';

    const formData = new FormData(this);

    const formSubmitButton = document.getElementById("contact-submit-button");

    formSubmitButton.disabled = true;

    fetch(FORMSPREE_POST_URL, {
        method: 'POST',
        body: formDataToJson(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((res) => {
        formSubmitButton.disabled = false;
        if (res.success === 'email sent') {
          toggleSuccess(true);
          SPINNER_ELEMENT.style.display = 'none';
          FORM_ELEMENT.reset();
        } else {
          ERROR_ELEMENT.innerHTML = 'Something went wrong. Please try again later.'
          ERROR_ELEMENT.style.display = 'block';
          SPINNER_ELEMENT.style.display = 'none';
          console.error('Oops. Something went wrong.')
          console.error(res)
        }
      })
      .catch((err) => {
        formSubmitButton.disabled = false;
        ERROR_ELEMENT.innerHTML = 'Something went wrong. Please try again later.'
        ERROR_ELEMENT.style.display = 'block';
        console.error(err);
      });
  });
}
