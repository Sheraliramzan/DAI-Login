import { Button, Loader, Input} from "semantic-ui-react";

export default function LoginForm({
    loginState = "before",
    onLoginClick = ()=>{}
}){
    var c = "blue";
    var Button_next = "click me to start";

    if (loginState === "before"){
        c = "blue";
    }
      if (loginState === "during"){
        c= "green";
        Button_next = "loading";
    }
      if (loginState === "after"){
        c= "grey";
        Button_next = "Logged in"  ;
    }

    return <div>
        <h3>Login Form</h3>
        <Input disabled= {loginState !== "before"} placeholder = "Email"/>
        <Input disabled= {loginState !== "before"} placeholder = "Password"/>
        <Button color ={c} onClick = {onLoginClick}>
         {Button_next}
         {loginState === "during" && <Loader active/>}
      </Button>
    </div>
}