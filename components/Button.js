const Button = ({ label, onPress }) => {
  return (
    <button className="rounded-lg bg-[#6188FF] px-5 py-2" onClick={onPress}>
      {label}
    </button>
  )
}

export default Button
