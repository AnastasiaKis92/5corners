const submitForm = () => {
  $('.cart__form').submit((evt) => {
    evt.preventDefault();

    const formData = Object.fromEntries(new FormData(evt.target).entries());
    console.log(formData);
  });
};

export {submitForm};
