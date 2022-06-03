import { ChevronUpIcon } from '@heroicons/react/solid'

const BullishFilled = () => {
  return (
    <div className="flex items-center">
      <ChevronUpIcon fill="#17C784" className="h-5 w-5" />
      <small className="ml-1 text-[#17C784]">Bullish</small>
    </div>
  )
}

export default BullishFilled
