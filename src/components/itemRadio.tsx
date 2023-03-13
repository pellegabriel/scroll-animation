import { ItemCustom } from "./ItemCustom"

interface Props {
    title: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    name:string;
} 
const ItemRadio = ({ title, handleChange, name }:Props) => {
  return (
    <ItemCustom title={title} >
        <label className="switch">
            <input type="checkbox" name={name} onChange={handleChange} />
            <span className="slider" />
          </label>
    </ItemCustom>
  )
}

export default ItemRadio