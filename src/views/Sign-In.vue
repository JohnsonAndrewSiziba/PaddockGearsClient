<template>
	<div class="sign-in">
		
		<a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">

			<!-- Sign In Form Column -->
			<a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
				<h1 class="mb-15">Sign In</h1>
				<h5 class="font-regular text-muted">Enter your email and password to sign in</h5>

				<!-- Sign In Form -->
				<a-form
					id="components-form-demo-normal-login"
					class="login-form"
					:hideRequiredMark="true"
				>
					<a-form-item class="mb-10" label="Email" :colon="false">
						<a-input v-model="email" v-decorator="['email',{ rules: [{ required: true, message: 'Please input your email!' }] },]" placeholder="Email" />
					</a-form-item>
					<a-form-item class="mb-5" label="Password" :colon="false">
						<a-input v-model="password" v-decorator="['password',{ rules: [{ required: true, message: 'Please input your password!' }] },]" type="password" placeholder="Password" />
					</a-form-item>
					<a-form-item>
						<a-button type="primary" block html-type="submit" class="login-form-button" @click="submitForm">
							SIGN IN
						</a-button>
					</a-form-item>
				</a-form>
				<!-- / Sign In Form -->

<!--				<p class="font-semibold text-muted">Don't have an account? <router-link to="/sign-in" class="font-bold text-dark">Sign Up</router-link></p>-->
			</a-col>
			<!-- / Sign In Form Column -->

			<!-- Sign In Image Column -->
			<a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
				<img src="@/assets/logos/logo.jpg" alt="">
			</a-col>
			<!-- Sign In Image Column -->

		</a-row>
    <br>
    <br>
    <br>
    <br>
    <br>
	</div>
</template>

<script>

	import Swal from "sweetalert2";
  import {MY_HTTP} from "@/my_http/axiosInstance";

  export default ({
		data() {
			return {
				// Binded model property for "Sign In Form" switch button for "Remember Me" .
				rememberMe: true,
        email: "",
        password: "",
			}
		},
    created() {
      // alert("Hello");
      // this.destroySessio
      //n();
      localStorage.removeItem('paddock_gears_key');
    },
    beforeCreate() {
			// Creates the form and adds to it component's "form" property.
			this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		methods: {
      destroySession(){
        MY_HTTP.get('/api/logout').then( response => {
          alert(response.data);
          if(response.data === true){
            Swal.fire({
              icon: 'success',
              title: 'Logout Successful.',
              showConfirmButton: false,
              timer: 1500
            });
            localStorage.removeItem('paddock_gears_key');
          }
          else {
            Swal.fire({
              title: 'Error!',
              text: 'An error occurred.',
              icon: 'error',
              confirmButtonText: 'Okay'
            })
          }
        }
        );
      },

			// Handles input validation after submission.
      submitForm(){
        if (this.email === "" || this.email === null){
          Swal.fire({
            title: 'Error!',
            text: 'Email cannot be null. Please enter Email.',
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        }

        else if (this.password === "" || this.password === null){
          Swal.fire({
            title: 'Error!',
            text: 'Password cannot be null. Please enter Password.',
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        }

        else {
          MY_HTTP.get('/sanctum/csrf-cookie').then(response => {
            MY_HTTP.post('/api/login', {
              email: this.email,
              password: this.password,
              device_name: "Vue Client",
            })
                .then(response => {
                  localStorage.setItem('paddock_gears_key', response.data);
                  Swal.fire({
                    icon: 'success',
                    title: 'You have successfully logged in.',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  this.$router.push({ name: 'Home' });
                })
                .catch(e => {
                  Swal.fire(
                      'Authentication Error',
                      'Email or Password is Incorrect!',
                      'error'
                  )
                })
          });
        }
      }
		},
	})

</script>

<style lang="scss">
	body {
		background-color: #ffffff;
	}
</style>