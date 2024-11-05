import React, { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function LazyComponent(props: { element: React.ReactNode}) {
    return (
        <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            {props.element}
        </Suspense>
    );
}