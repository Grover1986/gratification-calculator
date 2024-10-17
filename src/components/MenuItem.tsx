import type { MenuProps } from '../types'

type MenuItemProps = {
   item: MenuProps
}

const MenuItem = ({item}: MenuItemProps) => {
  return (
     <button className='border-2 border-teal-400 w-full p-3 hover:bg-teal-200 flex justify-between mb-5'>
        <p>{item.name}</p>
        <p className='font-black'>S/.{item.price}</p>
    </button>
  )
}

export default MenuItem