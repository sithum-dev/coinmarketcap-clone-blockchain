import { ChevronDownIcon } from '@heroicons/react/solid'
import { ChevronUpIcon } from '@heroicons/react/solid'

const Rate = ({ isIncrement, rate }) => {
  return (
    <div className="rate flex items-center">
      {isIncrement ? (
        <ChevronUpIcon fill="#17C784" />
      ) : (
        <ChevronDownIcon fill="#EA3943" />
      )}
      <p
        className={isIncrement ? 'ml-2 text-[#17C784]' : 'ml-2 text-[#EA3943]'}
      >
        {rate}
      </p>
    </div>
  )
}

export default Rate
