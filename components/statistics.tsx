import useMetadata from '~/hooks/useMetadata'

export default function Statistics() {
    const metadata = useMetadata()

    if (!metadata) {
        // Show nothing
        return null
    }

    return (
        <h4
            style={{
                padding: '8px 12px',
                textAlign: 'center',
                fontWeight: 600,
                color: '#01aede',
                backgroundColor: '#01aede20',
                borderRadius: '4px',
            }}
        >
            Downloaded over {metadata.downloads} times!
        </h4>
    )
}
