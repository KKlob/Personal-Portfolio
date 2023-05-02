import { cardAnatomy } from '@chakra-ui/anatomy'
import { VisuallyHidden, createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { BUILD_ID_FILE } from 'next/dist/shared/lib/constants';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
    terminalText: definePartsStyle({
        container: {
            backgroundColor: "gray",
            flex: "1",
            width: "100%",
            alignContent: "center",
            overflowY: "hidden",
        },
        header: {

        },
        body: {
            color: "white",
        },
        footer: {

        },
    }),
}

export const cardTheme = defineMultiStyleConfig({variants});