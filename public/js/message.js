function initMessageForm() {
  const FORMSPREE_FORM = 'qzlbjoar';
  const FORMSPREE_POST_URL = `https://formspree-martinspierio.herokuapp.com/${FORMSPREE_FORM}`;

  const FORM_ELEMENT = document.getElementById('contact-form');
  const SUCCESS_ELEMENT = document.getElementById('sent-message');
  const ERROR_ELEMENT = document.getElementById('error-message');

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

    const formData = new FormData(this);

    fetch(FORMSPREE_POST_URL, {
        method: 'POST',
        body: formDataToJson(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .catch((err) => {
        ERROR_ELEMENT.innerHTML = 'Something went wrong. Please try again later.'
        ERROR_ELEMENT.style.display = 'block';
        console.log(err);
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === 'email sent') {
          toggleSuccess(true);
          FORM_ELEMENT.reset();
        } else {
          ERROR_ELEMENT.innerHTML = 'Something went wrong. Please try again later.'
          ERROR_ELEMENT.style.display = 'block';
          console.log('Oops. Something went wrong.')
        }
      });
  });
}
