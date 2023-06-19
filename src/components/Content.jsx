import musicIcon from "../assets/images/icon-music.svg"
const Content = () => {
  return (
    <section className="flex flex-col p-11 gap-4">
      <h3 className="text-2xl font-bold text-neutral3">Order Summary</h3>
      <p className="font-light text-neutral2 leading-7">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="flex justify-around bg-neutral p-3 rounded-lg text-sm items-center">
        <img src={musicIcon} alt="music-icon" />
        <p className="text-neutral2 tracking-wide">
          <span className="font-bold text-neutral3">Annual Plan</span>
          <br />
          $59.99/year
        </p>
        <span className="text-primary font-bold underline cursor-pointer hover:underline hover:underline-offset-0 hover:text-indigo-700/80">
          Change
        </span>
      </div>
      <button className="py-3 px-6 bg-primary font-bold text-white rounded-lg hover:bg-indigo-600/80 shadow-black shadow-md">
        Proceed to Payment
      </button>
      <button className="py-3 px-8 font-semibold rounded-lg text-neutral2 hover:text-black">
        Cancel Order
      </button>
    </section>
  )
}
export default Content
