<script>
    export default {
        computed: {
           
        },
        methods: {
            goToDashboard() {
                let isAuthenticated=true;

                if (isAuthenticated) {
                    this.$router.push('/dashboard')
                } else {
                    this.$router.push('/login')
                }
            },
        },
    }
</script>

<template>
    <div style="padding-top:45px;">
        <h3 style="text-align:center;">Login</h3>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
            <form v-on:submit.prevent="goToDashboard">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember"> Remember me
                    </label>
                </div>
                <button type="submit" id="login" class="btn btn-primary">Login</button>
            </form>
            </div>
            <div class="col-md-4"></div>
        </div>
  </div>
</template>

<style>

</style>