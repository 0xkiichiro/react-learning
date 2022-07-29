import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  fullName: Yup.string().max(20, "Must be 20 or less characters.").required(),

  email: Yup.string().email("That's not an email address").required(),

  password: Yup.string()
    .min(
      8,
      "Passwords with less than 8 characters get decoded by bots in less than 3sec"
    )
    .max(16, "Don't get overexcited 16 characters is max you can use")
    .required()
    .matches(/\d+/, "Password must contain numbers")
    .matches(/[a-z]+/, "must include lowercase letters")
    .matches(/[A-Z]+/, "must include uppercase letters")
    .matches(
      /[!,?{}+-><%&$#€._]+/,
      "password must include at least one speacial letter"
    ),
});
