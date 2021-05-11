new Vue({
    el: "#app",
    data: {
        emailRandom: []
    },
    methods: {
        loadEmail() {

            const ajaxEmails = [];

            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        ajaxEmails.push(response.data.response);
                       
                        if (ajaxEmails.length === 10) {
                            this.emailRandom = ajaxEmails;
                        }
                    })
            }

        }
    }
})