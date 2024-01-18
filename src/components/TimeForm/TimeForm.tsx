import useForm
import './TimeForm.css'

const TimeForm = () => {
  return (
    <section className="border shadow-md rounded-lg bg-blue-200 w-full mx-auto px-6 py-2">
      <form className="flex flex-col">
        <div className='flex justify-between'>
        <label htmlFor="working-hours">Working Hours</label>
        <input className="time-input" type="number" id="working-hours" name="workingHours"  />
        </div>
        <div>
        <label htmlFor="waking-hour">Wake Up</label>
        <input className="time-input" type="number" id="waking-hour" name="wakingHour"  />
        <label className="pl-6" htmlFor="working-hours">Sleep</label>
        <input className="time-input" type="number" id="sleep-hour" name="sleepHour"  />
        </div>
        <button className='button-green'>Submit</button>

      </form>
    </section>

  )
}

export default TimeForm