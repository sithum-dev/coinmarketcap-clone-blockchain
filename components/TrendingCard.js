import MoreButton from './MoreButton'
import TrendingCardRow from './TrendingCardRow'
import Image from 'next/image'

const TrendingCard = ({ icon, title, trendingData }) => {
  return (
    <div className="mr-3 w-full rounded-xl bg-[#323546] p-5 py-3 pb-0 text-white ">
      <div className="flex items-center justify-between">
        <div className="flex">
          {icon && <Image src={icon} width={27} height={27} alt="" />}
          &nbsp;&nbsp;
          <p className="font-bold">{title}</p>
        </div>
        <MoreButton />
      </div>
      <br />

      {trendingData.map((item, index) => {
        return (
          <TrendingCardRow
            key={index}
            number={item.number}
            symbol={item.symbol}
            name={item.name}
            icon={item.icon}
            isIncrement={item.isIncrement}
            rate={item.rate}
          />
        )
      })}
    </div>
  )
}

export default TrendingCard
