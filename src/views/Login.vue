<template>
    <div id="container">
        <div class="header">
            <hr>
            <p class="brand">BLIRESS</p>
            <p class="slogan">Blibli Employee Progress</p>
            <hr>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #container {
        min-width: 100%;
        min-height: 100vh;
        background-image: url('../assets/bg-linear.svg');

        .header {
            font-family: 'Roboto';
            padding: 4rem 2.5rem;
            color: #FFF;
            text-align: center;

            hr {
                border: 0.0625rem solid #FFF;
            }

            .brand {
                margin: 0;
                padding: 0;
                font-size: 3em;
                font-weight: 900;
                text-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 77, 133, 0.25);
            }

            .slogan {
                font-size: 1.375em;
                margin: 0.25rem 0 1rem;
                padding: 0;
                font-weight: 400;
            }
        }
    }
</style>
