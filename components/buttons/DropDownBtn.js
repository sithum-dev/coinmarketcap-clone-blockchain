import { ChevronDownIcon } from '@heroicons/react/solid'

const DropdownBtn = ({ label }) => {
  return (
    <div className="flex cursor-pointer items-center rounded-md bg-blue-700 px-2 py-1">
      <p className="mr-2">{label}</p>
      <ChevronDownIcon className="h-6 w-6" />
    </div>
  )
}

export default DropdownBtn
