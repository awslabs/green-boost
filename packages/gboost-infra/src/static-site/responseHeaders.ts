import { Duration } from "aws-cdk-lib";
import {
  ResponseHeadersPolicyProps,
  HeadersReferrerPolicy,
  ResponseHeadersCorsBehavior,
  ResponseCustomHeadersBehavior,
  ResponseSecurityHeadersBehavior,
  ResponseHeadersContentSecurityPolicy,
  ResponseHeadersReferrerPolicy,
  ResponseHeadersStrictTransportSecurity,
  ResponseHeadersContentTypeOptions,
  ResponseHeadersFrameOptions,
  ResponseHeadersXSSProtection,
  HeadersFrameOption,
} from "aws-cdk-lib/aws-cloudfront";
import { camelToKebab } from "gboost-common";

/**
 * Configures the response headers added by CloudFront Rersponse Headers Policy
 */
export interface ResponseHeaders {
  /**
   * CORS Headers set on response. No defaults.
   * @default undefined
   */
  corsHeaders?: CorsHeaders;
  /**
   * Custom HTTP headers set on response
   * @default undefined
   * @example { "X-Amz-Security-Token": "some-value" }
   */
  customHeaders?: Record<string, string>;
  /**
   * Security Headers set on response. Secure defaults.
   */
  securityHeaders?: SecurityHeaders;
}

/**
 * Configures the CORS headers added by CloudFront Response Headers Policy
 */
interface CorsHeaders {
  /**
   * @default false
   */
  accessControlAllowCredentials?: boolean;
  /**
   * @default undefined
   * @example ['X-Custom-Header-1', 'X-Custom-Header-2']
   */
  accessControlAllowHeaders?: string[];
  /**
   * @default undefined
   * @example ['GET', 'POST']
   */
  accessControlAllowMethods?: string[];
  /**
   * @default ["*"]
   */
  accessControlAllowOrigins?: string[];
  /**
   * @default undefined
   * @example ['X-Custom-Header-1', 'X-Custom-Header-2']
   */
  accessControlExposeHeaders?: string[];
  /**
   * @default undefined
   * @example Duration.seconds(600)
   */
  accessControlMaxAge?: Duration;
}

/**
 * Configures the security headers added by CloudFront Response Headers Policy
 */
interface SecurityHeaders {
  /**
   * Content Security Policies are allow lists to tell the client what it's allowed to download
   * @default
   * ```js
   * {
   *    defaultSrc: ["self"],
   *    formAction: ["none"],
   *    navigateTo: ["none"],
   *    objectSrc: ["none"],
   *    styleSrc: ["unsafe-inline"], // required for styling libraries
   *  }
   * ```
   * @link https://developers.google.com/web/fundamentals/security/csp
   */
  contentSecurityPolicy?: ContentSecurityPolicy;
  /**
   * Indicates that the MIME types advertised in the Content-Type headers should be followed and not
   * changed.
   * @default true
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
   */
  contentTypeOptions?: boolean;
  /**
   * X-Frame-Options
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
   * @default HeadersFrameOption.DENY
   */
  frameOptions?: HeadersFrameOption;
  /**
   * Referrer Policy controls how much referrer information should included with
   * requests
   * @default HeadersReferrerPolicy.NO_REFERRER
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
   */
  referrerPolicy?: HeadersReferrerPolicy;
  /**
   * HTTP Strict Transport Security notifies user agents to only connect to a given site over HTTPS
   * @default
   * ```js
   * {
   *   accessControlMaxAge: Duration.days(365 * 2),
   *   includeSubdomains: true,
   *   preload: true,
   * }
   * ```
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
   */
  strictTransportSecurity?: StrictTransportSecurity;
  /**
   * X-XSS-Protection - feature of Internet Explorer, Chrome and Safari that
   * stops pages from loading when they detect reflected cross-site scripting
   * (XSS) attacks. These protections are largely unnecessary in modern browsers
   * when sites implement a strong Content-Security-Policy that disables the use
   * of inline JavaScript ('unsafe-inline')
   * @default
   * ```js
   * {
   *   protection: true,
   *   modeBlock: true
   * }
   * ```
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
   */
  xssProtection?: XssProtection;
}

/**
 * Configures the Content-Security-Policy header added by CloudFront Response
 * Headers Policy
 */
interface ContentSecurityPolicy {
  /**
   * connect-src - Restricts the URLs which can be loaded using script interfaces
   *
   * Defaults to default-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src
   */
  connectSrc?: string[];
  /**
   * default-src - Serves as a fallback for the other fetch directives
   * @default ["self"]
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src
   */
  defaultSrc?: string[];
  /**
   * font-src - Specifies valid sources for fonts loaded using @font-face
   *
   * Defaults to default-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src
   */
  fontSrc?: string[];
  /**
   * form-action - Restricts the URLs which can be used as the target of a form
   * submissions from a given context.
   * @default ["none"]
   */
  formAction?: string[];
  /**
   * frame-src - specifies valid sources for nested browsing contexts loading
   * using elements such as `<frame>` and `<iframe>`
   *
   * Defaults to default-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src
   */
  frameSrc?: string[];
  /**
   * img-src - Specifies valid sources of images and favicons
   *
   * Defaults to default-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src
   */
  imgSrc?: string[];
  /**
   * manifest-src - Specifies valid sources of application manifest files
   *
   * Defaults to default-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/manifest-src
   */
  manifestSrc?: string[];
  /**
   * media-src - Specifies valid sources for loading media using the <audio>,
   * <video> and <track> elements
   *
   * Defaults to default-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/media-src
   */
  mediaSrc?: string[];
  /**
   * navigate-to - Restricts the URLs to which a document can initiate navigation
   * by any means, including <form> (if form-action is not specified), <a>,
   * window.location, window.open, etc.
   *
   * @default ["none"]
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/navigate-to
   */
  navigateTo?: string[];
  /**
   * object-src - Specifies valid sources for the <object>, <embed>, and <applet>
   * elements
   *
   * Elements controlled by object-src are perhaps coincidentally considered
   * legacy HTML elements and are not receiving new standardized features
   * (such as the security attributes sandbox or allow for <iframe>). Therefore
   * it is recommended to restrict this fetch-directive (e.g., explicitly set
   * object-src 'none' if possible)
   *
   * Defaults to default-src if not set
   * @default ["none"]
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/object-src
   */
  objectSrc?: string[];
  /**
   * prefetch-src - specifies valid resources that may be prefetched or prerendered
   *
   * Defaults to default-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/prefetch-src
   */
  prefetchSrc?: string[];
  /**
   * script-src - Specifies valid sources for JavaScript
   *
   * Defaults to default-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
   */
  scriptSrc?: string[];
  /**
   * script-src-attr - Specifies valid sources for JavaScript <script> elements
   *
   * Defaults to script-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr
   */
  scriptSrcAttr?: string[];
  /**
   * script-src-elem - Specifies valid sources for JavaScript inline event handlers
   *
   * Defaults to script-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem
   */
  scriptSrcElem?: string[];
  /**
   * style-src - Specifies valid sources for stylesheets
   *
   * Defaults to default-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src
   */
  styleSrc?: string[];
  /**
   * style-src-attr - specifies valid sources for inline styles applied to individual
   * DOM elements
   *
   * Defaults to style-src if not set
   * @default undefined
   * @linkhttps://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-attr
   */
  styleSrcAttr?: string[];
  /**
   * style-src-elem - specifies valid sources for stylesheets <style> elements
   * and <link> elements with rel="stylesheet"
   *
   * Defaults to style-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-elem
   */
  styleSrcElem?: string[];
  /**
   * worker-src - specifies valid sources for Worker, SharedWorker, or
   * ServiceWorker scripts.
   *
   * Defaults to default-src if not set
   * @default undefined
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src
   */
  workerSrc?: string[];
}

interface StrictTransportSecurity {
  /**
   * accessControlMaxAge - how long user agents will redirect to HTTPS
   * @default Duration.days(365 * 2)
   */
  accessControlMaxAge: Duration;
  /**
   * includeSubdomains - whether user agents should upgrade requests on subdomains
   * @default true
   */
  includeSubdomains?: boolean;
  /**
   * @default true
   */
  preload?: boolean;
}

interface XssProtection {
  /**
   * If true, rather than sanitizing page, the browser will prevent rendering of
   * the page if an attack is detected
   * @default true
   */
  modeBlock: boolean;
  /**
   * If true, enable XSS filtering
   * @default true
   */
  protection: boolean;
}

export function getResponseHeadersPolicyProps(
  responseHeaders?: ResponseHeaders
): ResponseHeadersPolicyProps {
  return {
    corsBehavior: getCorsBehavior(responseHeaders?.corsHeaders),
    customHeadersBehavior: getCustomHeadersBehavior(
      responseHeaders?.customHeaders
    ),
    securityHeadersBehavior: getSecurityHeadersBehavior(
      responseHeaders?.securityHeaders
    ),
  };
}

export function getCorsBehavior(
  corsHeaders?: CorsHeaders
): ResponseHeadersCorsBehavior | undefined {
  if (corsHeaders) {
    return {
      // TODO: if corsHeaders is empty object then this results invalid CFN API
      // request, but there is a managed policy that looks identical...
      accessControlAllowCredentials: false,
      accessControlAllowHeaders: [],
      accessControlAllowMethods: [],
      accessControlAllowOrigins: ["*"],
      originOverride: true,
      ...corsHeaders,
    };
  }
}

export function getCustomHeadersBehavior(
  customHeaders: Record<string, string> | undefined
): ResponseCustomHeadersBehavior | undefined {
  if (customHeaders) {
    return {
      customHeaders: Object.entries(customHeaders).map(([header, value]) => ({
        header,
        value,
        override: true,
      })),
    };
  }
}

export function getSecurityHeadersBehavior(
  inputSecurityHeaders?: SecurityHeaders
): ResponseSecurityHeadersBehavior | undefined {
  const contentSecurityPolicy: ResponseHeadersContentSecurityPolicy = {
    contentSecurityPolicy: getCsp(
      inputSecurityHeaders?.contentSecurityPolicy ?? {}
    ), // will get default csps
    override: true,
  };
  const contentTypeOptions: ResponseHeadersContentTypeOptions | undefined =
    inputSecurityHeaders?.contentTypeOptions ? { override: true } : undefined;
  const frameOptions: ResponseHeadersFrameOptions = {
    frameOption: inputSecurityHeaders?.frameOptions ?? HeadersFrameOption.DENY,
    override: true,
  };
  const referrerPolicy: ResponseHeadersReferrerPolicy = {
    referrerPolicy:
      inputSecurityHeaders?.referrerPolicy ?? HeadersReferrerPolicy.NO_REFERRER,
    override: true,
  };
  const strictTransportSecurity: ResponseHeadersStrictTransportSecurity = {
    accessControlMaxAge: Duration.days(365 * 2),
    includeSubdomains: true,
    override: true,
    preload: true,
    ...inputSecurityHeaders?.strictTransportSecurity,
  };
  const xssProtection: ResponseHeadersXSSProtection = {
    modeBlock: true,
    override: true,
    protection: true,
    ...inputSecurityHeaders?.xssProtection,
  };
  return {
    contentSecurityPolicy,
    contentTypeOptions,
    frameOptions,
    referrerPolicy,
    strictTransportSecurity,
    xssProtection,
  };
}

export const defaultCsp: Partial<
  Record<keyof ContentSecurityPolicy, string[]>
> = {
  defaultSrc: ["self"],
  formAction: ["none"],
  navigateTo: ["none"],
  objectSrc: ["none"],
  styleSrc: ["unsafe-inline"],
};

export function getCsp(csp: ContentSecurityPolicy = {}): string {
  const newCsp = { ...defaultCsp, ...csp };
  let cspString = "";
  for (const [k, v] of Object.entries(newCsp)) {
    if (v.length) {
      cspString += `${camelToKebab(k)} ${getCspSource(v)}; `;
    }
  }
  return cspString.trim();
}

const quotedSources = [
  "none",
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "strict-dynamic",
];

export function getCspSource(sources: string[]) {
  return sources
    .map((s) => {
      if (quotedSources.includes(s)) {
        return `'${s}'`;
      } else {
        return s;
      }
    })
    .join(" ");
}
