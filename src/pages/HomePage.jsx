import { useRef } from "react"
import {setTrainerSlice} from "../store/slices/trainer.slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
const HomePage = () => {

    const trainer =useSelector(store => store.trainer)

    const dispatch = useDispatch()

    const inputTrainer = useRef()

    const navigate = useNavigate()

    const handleTrainer = e => {
        e.preventDefault();
        dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }
  return (
    <section className="section_home">
      
        <div className="div_img">
          <img className="img_pokedex" src="/img/pokedex.png" alt="pokedex" />
        </div>

        <div>
        <h2 className="name_trainer">¡Hi Trainer!</h2>
        <p className="p_trainer">To start, please, enter your trainer nickname</p>
        <form className="form_trainer" onSubmit={handleTrainer}>
            <input className="input_trainer" ref={inputTrainer} type="text" placeholder="Name" />
            <button className="button_trainer">Start!</button>
        </form>
        </div>
      <footer className="footer">
        <img src="/img/footerPokedex.png" alt="" />
      </footer>
    </section>
  )
}
export default HomePage