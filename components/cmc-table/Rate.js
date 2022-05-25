import { ChevronDownIcon } from '@heroicons/react/solid'
import { ChevronUpIcon } from '@heroicons/react/solid'

const Rate = ({ isIncrement, rate }) => {
  return (
    <div className="rate flex items-center">
      {isIncrement ? (
        <ChevronUpIcon className="h-5 w-5" fill="#17C784" />
      ) : (
        <ChevronDownIcon fill="#EA3943" />
      )}
      <p className={isIncrement ? 'text-[#17C784]' : 'text-[#EA3943]'}>
        {rate}
      </p>
    </div>
  )
}

export default Rate
