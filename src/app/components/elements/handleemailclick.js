export default function handleEmailClick() {
    const email = "hey@byIlya.com"
    const subject = encodeURIComponent("Hey Ilya! 👋")
    const body = encodeURIComponent(
      "Hey Ilya, \n\ \n\n\n Best regards, \n [Your Name]"
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }