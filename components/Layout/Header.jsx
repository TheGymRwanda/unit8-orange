import Link from 'next/link'
import Wrapper from '../sections/Wrapper'

const Header = () => {
  return (
    <Wrapper>
        <div className='py-12 flex-col lg:flex-row gap-5 flex text-xl sm:text-2xl justify-between -tracking-tighter sm:tracking-normal'>
            <div>Ape Unit</div>
            <div className="max-w-201.5">Unit➇ is a pioneering technology company specialing in decentralised technologies that creates end-to-end digital experiences for protocols including <Link href="#" className='text-purple'>Ethereum</Link>, <Link href="#" className='text-purple'>Tezos</Link>, <Link href="#" className='text-purple'>Near</Link>, <Link href="#" className='text-purple'>Algorand</Link>, <Link href="#" className='text-purple'>Celo</Link> and more. Its team of 2,500+ digital specialists across 30+ locations on 5 continents delivers pioneering work on a global scale with a boutique culture. </div>
        </div>
    </Wrapper>
  )
}

export default Header