# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it to:

**Email:** security@jquinterot.github.io

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will respond within 48 hours and provide a timeline for a fix.

## Security Measures

This project implements the following security measures:

### Application Security
- **Security Headers**: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **No XSS Vulnerabilities**: No use of `dangerouslySetInnerHTML`, `eval()`, or `new Function()`
- **Safe Storage**: All data stored in localStorage is properly sanitized
- **Type Safety**: TypeScript strict mode enabled

### Dependency Security
- **Automated Updates**: Dependabot monitors dependencies weekly
- **Vulnerability Scanning**: `npm audit` runs in CI
- **Override System**: npm overrides force updated nested dependencies

### CI/CD Security
- **Least Privilege**: Workflows use minimal permissions (`contents: read`)
- **Pinned Actions**: Using specific action versions (e.g., `@v4`)
- **Official Images**: Using official Playwright Docker image
- **No Secrets**: No API keys or secrets in code

### Best Practices
- Regular dependency updates
- Security-focused code reviews
- Automated security scanning
- Minimal attack surface

## Known Security Considerations

- **Client-Side Storage**: Exam data and history are stored in localStorage. Users should be aware that this data is accessible to any script running on the same origin.
- **No Backend**: This is a client-side only application with no server-side data persistence.
- **Static Export**: The app is statically generated, reducing server-side attack vectors.

## Security Updates

Security updates are released as patch versions and announced in the GitHub releases page.
