import { IoHome } from 'react-icons/io5'

export const HomeIcon = () => {
  return (
    <>
      <IoHome
        size={16}
        color="black"
        className="home-icon--light"
      />
      <IoHome
        size={16}
        color="white"
        className="home-icon--dark"
      />
    </>
  )
}