import * as React from 'react';

/**
 * Provides latest-format images (typically webp) with fallback for older images (typically jpg/png) for older browsers
 * The "src" will be the one to be loaded on modern browsers. On older browsers the "src"'s extension will be replaced with the fallback one
 * For example, instead of `owl.webp`, `owl.jpg` will be loaded if `fallbackExtension` is `jpg`
 */
export const ImageWithFallback = (
	props: {
		src: string;
		alt: string;
		/** without the dot */
		fallbackExtension: string;
		onClick?: VoidFunction;
		extraStyle?: React.CSSProperties;
		extraClass?: string;
	}
) => {
	const { src, fallbackExtension } = props;

	const { srcWithFallbackExtension, sourceProps } = React.useMemo((): {
		srcWithFallbackExtension: string;
		sourceProps: React.ComponentProps<'source'>;
	} => {
		const _sourceProps: React.ComponentProps<'source'> = { srcSet: src };
		if (src.toLowerCase().endsWith('.webp')) {
			_sourceProps.type = 'image/webp';
		}

		return {
			srcWithFallbackExtension:
				src.replace(/\.[^/.]+$/, '') + `.${fallbackExtension}`,
			sourceProps: _sourceProps,
		};
	}, [src, fallbackExtension]);

	return (
		<picture onClick={props.onClick}>
			<source {...sourceProps} />
			<img
				alt={props.alt}
				style={props.extraStyle}
				className={props.extraClass}
				src={srcWithFallbackExtension}
			/>
		</picture>
	);
};
