import { ChevronDownIcon } from '@heroicons/react/solid'
import { InformationCircleIcon } from '@heroicons/react/solid'

const CmcTableHeader = () => {
  return (
    <tbody>
      <tr>
        <th></th>
        <th className="flex items-center">
          <b># &nbsp;</b>
          <ChevronDownIcon className="h-4 w-4" />
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>
          <div className="flex items-center">
            <p className="mr-2">Market Cap</p>{' '}
            <InformationCircleIcon className="h-4 w-4 text-gray-600" />
          </div>
        </th>
        <th>
          <div className="flex items-center">
            <p className="mr-2">Volume(24h)</p>{' '}
            <InformationCircleIcon className="h-4 w-4 text-gray-600" />
          </div>
        </th>
        <th>
          <div className="flex items-center">
            <p className="mr-2">Circulating Supply</p>{' '}
            <InformationCircleIcon className="h-4 w-4 text-gray-600" />
          </div>
        </th>
        <th>Last 7 days</th>
      </tr>
    </tbody>
  )
}

export default CmcTableHeader
