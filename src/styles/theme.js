import { extendTheme } from '@chakra-ui/react'
import { cardTheme } from './card_themes';

const theme = extendTheme({
  components: {
    Card: cardTheme,
  },
})

export default theme;