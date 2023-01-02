// custom search focus
(function searchFocus() {
    {
        const form = document.querySelector('.form-search');
        const el = {
            input: form.querySelector('input'),
            submit: form.querySelector('button[type="submit"]'),
            reset: form.querySelector('button[type="reset"]'),
        };

        //check if input is empty?
        el.input.addEventListener('input', function (event) {
            const value = el.input.value;

            if (!value) {
                el.input.dataset.state = '';
                return;
            }

            const trimmed = value.trim();

            if (trimmed) {
                el.input.dataset.state = 'valid';
            } else {
                el.input.dataset.state = 'invalid';
            }
        });

        //listen to submit cutton click,
        //if search input is empty disable form submission, and focus input
        el.submit.addEventListener('click', function () {
            if (el.input.dataset.state == 'valid') {
                //input has focus
                return true;
            } else {
                //add focus to input
                event.preventDefault();
                el.input.focus();
            }
        });
    }
})();
