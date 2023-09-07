export default function hasSpecialCharacter(password) {
    const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return specialCharacterRegex.test(password);
  }
