import { useContext } from 'react'
import { Button } from './ui/button'
import { Context, useSatate } from '@/App'

const AddNewCardButton = () => {
    const [addBox, setAddBox] = useContext(Context)
    const hanldeClick = () => {
        setAddBox(!addBox)
    }
    console.log(addBox)
    return (
        <div className='mt-5 w-full  flex justify-center'>
            <Button className='flex md:flex-none flex-1' onClick={hanldeClick}>Add new Card</Button>
        </div>
    )
}

export default AddNewCardButton
