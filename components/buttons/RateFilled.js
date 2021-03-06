import { ChevronUpIcon } from '@heroicons/react/solid'

const RateFilled = () => {
  return (
    <div className="ml-3 flex items-center rounded-xl bg-green-600 px-3">
      <ChevronUpIcon className="h-5 w-5" />
      <small className="pl-1">23.32%</small>
    </div>
  )
}

export default RateFilled
