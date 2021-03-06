import Rate from './cmc-table/Rate'
import Image from 'next/image'

const TrendingCardRow = ({ number, icon, name, symbol, isIncrement, rate }) => {
  return (
    <div className="mb-4 flex items-center justify-between text-[0.93rem]">
      <p className="opacity-40">{number}</p>
      <div className="flex w-full">
        <div className="mx-5">
          {icon && (
            <Image
              className="rounded-full"
              alt=""
              src={icon}
              width={20}
              height={20}
            />
          )}
        </div>
        <p className="font-bold">
          {name}
          <span className="text-gray-400"> {symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  )
}

export default TrendingCardRow
