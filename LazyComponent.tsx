export default function LazyComponent(props: { element: React.ReactNode}) {
    return (
        <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            {props.element}
        </Suspense>
    );
}