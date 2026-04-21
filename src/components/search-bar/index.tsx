import { BiSearch } from "react-icons/bi"
import { ContainerBar, IconWrapper, Input } from "./styles"

type Props = {
  ref: React.RefObject<HTMLInputElement | null>
  handle: () => void
}

export const SearchBar = ({ ref, handle }: Props) => {
  return (
    <ContainerBar>
      <IconWrapper>
        <BiSearch size={18} />
      </IconWrapper>

      <Input ref={ref} onInput={handle} placeholder="Search by name common or official." />
    </ContainerBar>
  )
}
