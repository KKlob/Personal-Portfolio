import { cardAnatomy } from '@chakra-ui/anatomy'
import { VisuallyHidden, createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { BUILD_ID_FILE } from 'next/dist/shared/lib/constants';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
    terminalWindow: definePartsStyle({
        container: {
            backgroundColor: "#444444",
            height: "100vh",
            flexDirection: "column",
            padding: "5px 4px 4px 4px"
        }
    }),
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