import { cardAnatomy } from '@chakra-ui/anatomy'
import { VisuallyHidden, createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { BUILD_ID_FILE } from 'next/dist/shared/lib/constants';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
    terminalText: definePartsStyle({
        container: {
            "::-webkit-scrollbar": {
                display: "none"
            }
        },
        header: {

        },
        body: {
            
        },
        footer: {

        },
    }),
}

export const cardTheme = defineMultiStyleConfig({variants});