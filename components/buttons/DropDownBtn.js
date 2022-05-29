import { ChevronDownIcon } from '@heroicons/react/solid'

const DropdownBtn = ({ label }) => {
  return (
    <div className="mr-2 flex cursor-pointer items-center rounded-md bg-blue-700 px-2">
      <p className="mr-2">{label}</p>
      <ChevronDownIcon />
    </div>
  )
}

export default DropdownBtn
