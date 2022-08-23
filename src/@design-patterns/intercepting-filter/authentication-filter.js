import Filter from "./filter.js";

class AuthenticationFilter extends Filter {
  execute(request) {
    console.log("Authenticating request: " + request);
  }
}

export default AuthenticationFilter;