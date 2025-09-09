<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="RisingPath - Smart Internship Finder for PM Internship Scheme. Find relevant internships in under 5 minutes.">
    <meta name="keywords" content="internship, PM scheme, government internship, student jobs, career">
    <meta name="author" content="RisingPath Team">
    <title>RisingPath - Smart Internship Finder</title>
    
    <!-- Preload critical resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- PWA Manifest -->
    <link rel="manifest" href="data:application/json;base64,eyJuYW1lIjoiUmlzaW5nUGF0aCIsInNob3J0X25hbWUiOiJSaXNpbmdQYXRoIiwidGhlbWVfY29sb3IiOiIjNjY3ZWVhIiwiYmFja2dyb3VuZF9jb2xvciI6IiNmZmZmZmYiLCJkaXNwbGF5Ijoic3RhbmRhbG9uZSIsInN0YXJ0X3VybCI6Ii8iLCJpY29ucyI6W3sic3JjIjoiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMmFXVjNRbTk0UFNJd0lEQWdNVEk0SURNNE9DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQm1hV3hzUFNJak5qWTNaV1ZoSWo0OFkybHlZMnhsSUdONFBTSTJOQ0lnWTNrOUlqRTVOQ0lnY2owaU5qUWlMejQ4TDNOMlp6ND0iLCJzaXplcyI6IjEyOHgxMjgiLCJ0eXBlIjoiaW1hZ2Uvc3ZnK3htbCJ9XX0=">
    
    <!-- Favicon -->
    <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDM4OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjNjY3ZWVhIj48Y2lyY2xlIGN4PSI2NCIgY3k9IjE5NCIgcj0iNjQiLz48L3N2Zz4=">
    
    <style>
        :root {
            --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --primary-color: #667eea;
            --secondary-color: #764ba2;
            --success-color: #48bb78;
            --warning-color: #ed8936;
            --error-color: #e53e3e;
            --gray-50: #f7fafc;
            --gray-100: #edf2f7;
            --gray-200: #e2e8f0;
            --gray-300: #cbd5e0;
            --gray-400: #a0aec0;
            --gray-500: #718096;
            --gray-600: #4a5568;
            --gray-700: #2d3748;
            --gray-800: #1a202c;
            --gray-900: #171923;
            --white: #ffffff;
            
            --border-radius: 12px;
            --border-radius-lg: 16px;
            --border-radius-xl: 20px;
            --spacing-xs: 4px;
            --spacing-sm: 8px;
            --spacing-md: 12px;
            --spacing-lg: 16px;
            --spacing-xl: 20px;
            --spacing-2xl: 24px;
            --spacing-3xl: 32px;
            
            --font-size-xs: 12px;
            --font-size-sm: 14px;
            --font-size-base: 16px;
            --font-size-lg: 18px;
            --font-size-xl: 20px;
            --font-size-2xl: 24px;
            --font-size-3xl: 28px;
            
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
            --shadow-md: 0 4px 15px rgba(0,0,0,0.05);
            --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
            --shadow-xl: 0 25px 50px rgba(0,0,0,0.15);
            
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            font-size: 16px;
            scroll-behavior: smooth;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--primary-gradient);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1.6;
            color: var(--gray-700);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        /* Loading Screen */
        .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--primary-gradient);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        .loading-screen.hidden {
            opacity: 0;
            visibility: hidden;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
            margin-bottom: var(--spacing-xl);
        }

        .loading-text {
            color: white;
            font-size: var(--font-size-lg);
            font-weight: 500;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        /* App Container */
        .app-container {
            background: var(--white);
            border-radius: var(--border-radius-xl);
            box-shadow: var(--shadow-xl);
            overflow: hidden;
            width: 100%;
            max-width: 375px;
            height: 812px;
            position: relative;
            backdrop-filter: blur(10px);
        }

        @media (max-width: 480px) {
            .app-container {
                width: 100vw;
                height: 100vh;
                border-radius: 0;
                max-width: none;
            }
        }
        
        /* Screen Management */
        .screen {
            display: none;
            height: 100%;
            overflow-y: auto;
            animation: fadeIn 0.3s ease-in-out;
        }
        
        .screen.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }

        @keyframes slideInLeft {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
        }
        
        /* Header */
        .header {
            background: var(--primary-gradient);
            color: var(--white);
            padding: var(--spacing-3xl) var(--spacing-xl) var(--spacing-xl);
            text-align: center;
            position: relative;
            min-height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .back-btn {
            position: absolute;
            left: var(--spacing-xl);
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--white);
            font-size: var(--font-size-2xl);
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }

        .back-btn:hover {
            background: rgba(255,255,255,0.1);
            transform: translateY(-50%) scale(1.1);
        }
        
        .logo {
            font-size: var(--font-size-2xl);
            font-weight: 700;
            margin-bottom: var(--spacing-xs);
            letter-spacing: -0.5px;
        }
        
        .tagline {
            font-size: var(--font-size-sm);
            opacity: 0.9;
            font-weight: 400;
        }

        /* Accessibility Bar */
        .accessibility-bar {
            background: var(--gray-50);
            padding: var(--spacing-md);
            text-align: center;
            font-size: var(--font-size-xs);
            color: var(--gray-500);
            border-bottom: 1px solid var(--gray-200);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: var(--spacing-lg);
        }

        .accessibility-feature {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
        }
        
        /* Content */
        .content {
            padding: var(--spacing-3xl) var(--spacing-2xl);
            height: calc(100% - 200px);
            overflow-y: auto;
        }
        
        .welcome-section {
            text-align: center;
            margin-bottom: var(--spacing-3xl);
        }
        
        .welcome-section h1 {
            font-size: var(--font-size-3xl);
            color: var(--gray-700);
            margin-bottom: var(--spacing-lg);
            font-weight: 700;
            line-height: 1.2;
        }
        
        .welcome-section p {
            color: var(--gray-500);
            font-size: var(--font-size-base);
            line-height: 1.6;
            margin-bottom: var(--spacing-xl);
        }

        /* Feature Grid */
        .feature-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-lg);
            margin: var(--spacing-3xl) 0;
        }
        
        .feature-card {
            text-align: center;
            padding: var(--spacing-xl);
            background: var(--gray-50);
            border-radius: var(--border-radius);
            transition: var(--transition);
            border: 1px solid var(--gray-200);
        }

        .feature-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            background: var(--white);
        }
        
        .feature-icon {
            font-size: var(--font-size-3xl);
            margin-bottom: var(--spacing-md);
            display: block;
        }
        
        .feature-title {
            font-size: var(--font-size-sm);
            font-weight: 600;
            color: var(--gray-700);
        }

        /* Form Elements */
        .form-group {
            margin-bottom: var(--spacing-2xl);
            position: relative;
        }
        
        .form-label {
            display: block;
            font-weight: 600;
            color: var(--gray-700);
            margin-bottom: var(--spacing-sm);
            font-size: var(--font-size-sm);
        }

        .form-label .required {
            color: var(--error-color);
            margin-left: 2px;
        }
        
        .form-input, .form-select {
            width: 100%;
            padding: var(--spacing-lg);
            border: 2px solid var(--gray-200);
            border-radius: var(--border-radius);
            font-size: var(--font-size-base);
            transition: var(--transition);
            background: var(--white);
            font-family: inherit;
        }
        
        .form-input:focus, .form-select:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-input.error, .form-select.error {
            border-color: var(--error-color);
            box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
        }

        .form-input.valid, .form-select.valid {
            border-color: var(--success-color);
        }

        .form-error {
            color: var(--error-color);
            font-size: var(--font-size-xs);
            margin-top: var(--spacing-xs);
            display: none;
        }

        .form-error.show {
            display: block;
        }
        
        .input-group {
            position: relative;
        }

        .voice-input-btn {
            position: absolute;
            right: var(--spacing-lg);
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--primary-color);
            font-size: var(--font-size-lg);
            cursor: pointer;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }

        .voice-input-btn:hover {
            background: rgba(102, 126, 234, 0.1);
        }

        .voice-input-btn.recording {
            color: var(--error-color);
            animation: pulse 1s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        /* Skills Selection */
        .skills-container {
            margin-top: var(--spacing-md);
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: var(--spacing-md);
        }
        
        .skill-tag {
            background: var(--gray-50);
            border: 2px solid var(--gray-200);
            padding: var(--spacing-sm) var(--spacing-lg);
            border-radius: 20px;
            font-size: var(--font-size-sm);
            cursor: pointer;
            transition: var(--transition);
            user-select: none;
            font-weight: 500;
        }
        
        .skill-tag:hover {
            border-color: var(--primary-color);
            background: rgba(102, 126, 234, 0.1);
        }

        .skill-tag.selected {
            background: var(--primary-color);
            color: var(--white);
            border-color: var(--primary-color);
            transform: scale(1.05);
        }

        .skills-counter {
            font-size: var(--font-size-xs);
            color: var(--gray-500);
            margin-top: var(--spacing-sm);
            text-align: right;
        }

        /* Progress Bar */
        .progress-container {
            padding: 0 var(--spacing-2xl);
            margin-bottom: var(--spacing-xl);
        }

        .progress-bar {
            height: 4px;
            background: var(--gray-200);
            border-radius: 2px;
            overflow: hidden;
        }
        
        .progress-fill {
            height: 100%;
            background: var(--primary-gradient);
            transition: width 0.5s ease;
            border-radius: 2px;
        }

        .progress-text {
            text-align: center;
            font-size: var(--font-size-xs);
            color: var(--gray-500);
            margin-top: var(--spacing-sm);
        }

        /* Buttons */
        .btn {
            border: none;
            border-radius: var(--border-radius);
            font-size: var(--font-size-base);
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            font-family: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--spacing-sm);
            text-decoration: none;
        }
        
        .btn-primary {
            background: var(--primary-gradient);
            color: var(--white);
            padding: var(--spacing-lg) var(--spacing-3xl);
            width: 100%;
            margin-top: var(--spacing-xl);
            box-shadow: var(--shadow-sm);
        }
        
        .btn-primary:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:active {
            transform: translateY(0);
        }

        .btn-primary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        
        .btn-secondary {
            background: var(--white);
            color: var(--primary-color);
            border: 2px solid var(--primary-color);
            padding: var(--spacing-lg) var(--spacing-2xl);
            width: 100%;
            margin-top: var(--spacing-md);
        }

        .btn-secondary:hover {
            background: var(--primary-color);
            color: var(--white);
        }

        /* Internship Cards */
        .results-header {
            text-align: center;
            margin-bottom: var(--spacing-3xl);
            padding: var(--spacing-xl);
            background: var(--gray-50);
            border-radius: var(--border-radius);
            border: 1px solid var(--gray-200);
        }

        .results-count {
            font-size: var(--font-size-lg);
            font-weight: 600;
            color: var(--gray-700);
            margin-bottom: var(--spacing-xs);
        }

        .results-subtitle {
            color: var(--gray-500);
            font-size: var(--font-size-sm);
        }
        
        .internship-card {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--border-radius-lg);
            padding: var(--spacing-xl);
            margin-bottom: var(--spacing-xl);
            box-shadow: var(--shadow-md);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
        }
        
        .internship-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--primary-color);
        }

        .internship-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--primary-gradient);
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: var(--spacing-lg);
        }
        
        .card-main {
            display: flex;
            align-items: center;
            flex: 1;
        }

        .company-logo {
            width: 60px;
            height: 60px;
            background: var(--primary-gradient);
            border-radius: var(--border-radius);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-weight: 700;
            font-size: var(--font-size-lg);
            flex-shrink: 0;
        }
        
        .card-content {
            margin-left: var(--spacing-lg);
        }
        
        .job-title {
            font-size: var(--font-size-lg);
            font-weight: 700;
            color: var(--gray-700);
            margin-bottom: var(--spacing-xs);
            line-height: 1.3;
        }
        
        .company-name {
            color: var(--gray-500);
            font-size: var(--font-size-sm);
            margin-bottom: var(--spacing-xs);
        }
        
        .location {
            color: var(--primary-color);
            font-size: var(--font-size-sm);
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
        }
        
        .match-score {
            background: var(--success-color);
            color: var(--white);
            padding: var(--spacing-sm) var(--spacing-md);
            border-radius: 20px;
            font-size: var(--font-size-xs);
            font-weight: 600;
            flex-shrink: 0;
            box-shadow: var(--shadow-sm);
        }
        
        .card-skills {
            display: flex;
            flex-wrap: wrap;
            gap: var(--spacing-sm);
            margin: var(--spacing-lg) 0;
        }
        
        .skill-badge {
            background: var(--gray-100);
            color: var(--gray-600);
            padding: var(--spacing-xs) var(--spacing-md);
            border-radius: var(--border-radius);
            font-size: var(--font-size-xs);
            font-weight: 500;
        }

        .skill-badge.match {
            background: rgba(102, 126, 234, 0.1);
            color: var(--primary-color);
        }
        
        .card-description {
            color: var(--gray-500);
            font-size: var(--font-size-sm);
            line-height: 1.6;
            margin-bottom: var(--spacing-lg);
        }

        .card-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-lg);
            padding-top: var(--spacing-lg);
            border-top: 1px solid var(--gray-200);
        }

        .card-meta-item {
            text-align: center;
            flex: 1;
        }

        .card-meta-value {
            font-weight: 600;
            color: var(--gray-700);
            font-size: var(--font-size-sm);
        }

        .card-meta-label {
            color: var(--gray-500);
            font-size: var(--font-size-xs);
            margin-top: 2px;
        }
        
        .apply-btn {
            background: var(--primary-gradient);
            color: var(--white);
            border: none;
            padding: var(--spacing-md) var(--spacing-xl);
            border-radius: var(--border-radius);
            font-size: var(--font-size-sm);
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            width: 100%;
        }

        .apply-btn:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }

        /* Demo Notice */
        .demo-notice {
            background: linear-gradient(135deg, #e6fffa 0%, #f0fff4 100%);
            padding: var(--spacing-lg);
            border-radius: var(--border-radius);
            margin-bottom: var(--spacing-xl);
            text-align: center;
            border: 1px solid #9ae6b4;
        }

        .demo-notice p {
            color: var(--gray-600);
            font-size: var(--font-size-sm);
            margin: 0;
        }

        .demo-notice strong {
            color: var(--success-color);
        }

        /* Navigation */
        .bottom-navigation {
            position: fixed;
            bottom: var(--spacing-xl);
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(10px);
            padding: var(--spacing-md) var(--spacing-xl);
            border-radius: 30px;
            display: flex;
            gap: var(--spacing-lg);
            z-index: 1000;
        }
        
        .nav-btn {
            background: var(--white);
            border: none;
            padding: var(--spacing-sm) var(--spacing-lg);
            border-radius: var(--spacing-lg);
            cursor: pointer;
            font-size: var(--font-size-xs);
            font-weight: 600;
            transition: var(--transition);
            color: var(--gray-700);
        }
        
        .nav-btn.active {
            background: var(--primary-color);
            color: var(--white);
            transform: scale(1.05);
        }

        .nav-btn:hover {
            background: var(--gray-100);
        }

        .nav-btn.active:hover {
            background: var(--primary-color);
        }

        /* Toast Notifications */
        .toast {
            position: fixed;
            top: var(--spacing-xl);
            right: var(--spacing-xl);
            background: var(--white);
            border-radius: var(--border-radius);
            padding: var(--spacing-lg);
            box-shadow: var(--shadow-lg);
            z-index: 2000;
            transform: translateX(100%);
            transition: var(--transition);
            border-left: 4px solid var(--success-color);
            min-width: 250px;
        }

        .toast.show {
            transform: translateX(0);
        }

        .toast.error {
            border-left-color: var(--error-color);
        }

        .toast-content {
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
        }

        .toast-icon {
            font-size: var(--font-size-lg);
        }

        .toast-text {
            color: var(--gray-700);
            font-size: var(--font-size-sm);
            font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 480px) {
            .content {
                padding: var(--spacing-xl);
            }

            .feature-grid {
                grid-template-columns: 1fr;
                gap: var(--spacing-md);
            }

            .bottom-navigation {
                bottom: var(--spacing-md);
                padding: var(--spacing-sm) var(--spacing-lg);
            }
        }

        /* Accessibility */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        /* Focus styles for keyboard navigation */
        .btn:focus-visible,
        .form-input:focus-visible,
        .form-select:focus-visible,
        .skill-tag:focus-visible,
        .nav-btn:focus-visible {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            .accessibility-bar {
                background: var(--gray-800);
                color: var(--gray-300);
                border-bottom-color: var(--gray-700);
            }
        }

        /* Print styles */
        @media print {
            .bottom-navigation,
            .accessibility-bar,
            .voice-input-btn {
                display: none !important;
            }
        }
    </style>
</head>
<body>
    <!-- Loading Screen -->
    <div class="loading-screen" id="loadingScreen">
        <div class="spinner"></div>
        <div class="loading-text">Loading RisingPath...</div>
    </div>

    <!-- Toast Notification -->
    <div class="toast" id="toast">
        <div class="toast-content">
            <span class="toast-icon">✓</span>
            <span class="toast-text">Profile saved successfully!</span>
        </div>
    </div>

    <div class="app-container" id="appContainer">
        <!-- Screen 1: Welcome/Landing -->
        <div class="screen active" id="welcome" role="main" aria-label="Welcome to RisingPath">
            <div class="accessibility-bar">
                <div class="accessibility-feature">
                    <span>🔊</span>
                    <span>Voice Support</span>
                </div>
                <div class="accessibility-feature">
                    <span>👁️</span>
                    <span>Screen Reader Compatible</span>
                </div>
                <div class="accessibility-feature">
                    <span>🌐</span>
                    <span>Multi-Language Ready</span>
                </div>
            </div>
            <header class="header">
                <h1 class="logo">RisingPath</h1>
                <p class="tagline">Smart Internship Finder</p>
            </header>
            <main class="content">
                <section class="welcome-section">
                    <h1>Find Your Perfect Internship</h1>
                    <p>Connect with relevant internship opportunities under the PM Internship Scheme in under 5 minutes. Our smart matching system finds the best opportunities tailored to your skills and preferences.</p>
                </section>
                
                <div class="feature-grid">
                    <div class="feature-card">
                        <span class="feature-icon">🎯</span>
                        <div class="feature-title">Smart Matching</div>
                    </div>
                    <div class="feature-card">
                        <span class="feature-icon">📱</span>
                        <div class="feature-title">Mobile First</div>
                    </div>
                    <div class="feature-card">
                        <span class="feature-icon">🌐</span>
                        <div class="feature-title">Multi-Language</div>
                    </div>
                    <div class="feature-card">
                        <span class="feature-icon">⚡</span>
                        <div class="feature-title">Quick Results</div>
                    </div>
                </div>
                
                <button class="btn btn-primary" onclick="navigateToScreen('profile')" aria-describedby="get-started-desc">
                    Get Started
                    <span class="sr-only" id="get-started-desc">Begin creating your profile to find internships</span>
                </button>
                <button class="btn btn-secondary" onclick="navigateToScreen('demo')" aria-describedby="demo-desc">
                    View Demo Results
                    <span class="sr-only" id="demo-desc">See sample internship matches</span>
                </button>
            </main>
        </div>

        <!-- Screen 2: Profile Setup -->
        <div class="screen" id="profile" role="main" aria-label="Create your profile">
            <header class="header">
                <button class="back-btn" onclick="navigateToScreen('welcome')" aria-label="Go back to welcome screen">←</button>
                <h1 class="logo">Create Your Profile</h1>
                <p class="tagline">Step 1 of 2</p>
            </header>
            <div class="progress-container">
                <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-fill" style="width: 50%"></div>
                </div>
                <div class="progress-text">50% Complete</div>
            </div>
            <main class="content">
                <form id="profileForm" novalidate>
                    <div class="form-group">
                        <label class="form-label" for="fullName">Full Name <span class="required">*</span></label>
                        <div class="input-group">
                            <input 
                                type="text" 
                                id="fullName" 
                                name="fullName"
                                class="form-input" 
                                placeholder="Enter your full name"
                                required
                                autocomplete="name"
                                aria-describedby="fullName-error"
                            >
                            <button type="button" class="voice-input-btn" onclick="startVoiceInput('fullName')" aria-label="Use voice input for name">🎤</button>
                        </div>
                        <div class="form-error" id="fullName-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="email">Email Address <span class="required">*</span></label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            class="form-input" 
                            placeholder="your.email@example.com"
                            required
                            autocomplete="email"
                            aria-describedby="email-error"
                        >
                        <div class="form-error" id="email-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="phone">Phone Number <span class="required">*</span></label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            class="form-input" 
                            placeholder="+91 12345 67890"
                            required
                            autocomplete="tel"
                            aria-describedby="phone-error"
                        >
                        <div class="form-error" id="phone-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="education">Current Education Level <span class="required">*</span></label>
                        <select 
                            id="education" 
                            name="education"
                            class="form-select" 
                            required
                            aria-describedby="education-error"
                        >
                            <option value="">Select your level</option>
                            <option value="12th">12th Grade</option>
                            <option value="diploma">Diploma</option>
                            <option value="bachelors">Bachelor's Degree</option>
                            <option value="masters">Master's Degree</option>
                        </select>
                        <div class="form-error" id="education-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="field">Field of Study <span class="required">*</span></label>
                        <select 
                            id="field" 
                            name="field"
                            class="form-select" 
                            required
                            aria-describedby="field-error"
                        >
                            <option value="">Select your field</option>
                            <option value="computer-science">Computer Science</option>
                            <option value="electronics">Electronics</option>
                            <option value="mechanical">Mechanical</option>
                            <option value="business">Business</option>
                            <option value="arts-design">Arts & Design</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="form-error" id="field-error"></div>
                    </div>
                    
                    <button type="button" class="btn btn-primary" onclick="validateAndContinue()" id="continueBtn">
                        Continue
                    </button>
                </form>
            </main>
        </div>

        <!-- Screen 3: Preferences -->
        <div class="screen" id="preferences" role="main" aria-label="Set your preferences">
            <header class="header">
                <button class="back-btn" onclick="navigateToScreen('profile')" aria-label="Go back to profile screen">←</button>
                <h1 class="logo">Your Preferences</h1>
                <p class="tagline">Step 2 of 2</p>
            </header>
            <div class="progress-container">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-fill" style="width: 100%"></div>
                </div>
                <div class="progress-text">100% Complete</div>
            </div>
            <main class="content">
                <form id="preferencesForm" novalidate>
                    <div class="form-group">
                        <label class="form-label" for="location">Preferred Location <span class="required">*</span></label>
                        <select 
                            id="location" 
                            name="location"
                            class="form-select" 
                            required
                            aria-describedby="location-error"
                        >
                            <option value="">Select location</option>
                            <option value="delhi">Delhi NCR</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="chennai">Chennai</option>
                            <option value="pune">Pune</option>
                            <option value="hyderabad">Hyderabad</option>
                            <option value="remote">Remote</option>
                        </select>
                        <div class="form-error" id="location-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="industry">Industry Preference</label>
                        <select 
                            id="industry" 
                            name="industry"
                            class="form-select"
                        >
                            <option value="">Select industry</option>
                            <option value="technology">Technology</option>
                            <option value="finance">Finance</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="government">Government</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Your Skills (Select up to 5) <span class="required">*</span></label>
                        <div class="skills-container">
                            <div class="skill-tags" role="group" aria-label="Select your skills">
                                <button type="button" class="skill-tag" data-skill="python" onclick="toggleSkill(this)" aria-pressed="false">Python</button>
                                <button type="button" class="skill-tag" data-skill="javascript" onclick="toggleSkill(this)" aria-pressed="false">JavaScript</button>
                                <button type="button" class="skill-tag" data-skill="react" onclick="toggleSkill(this)" aria-pressed="false">React</button>
                                <button type="button" class="skill-tag" data-skill="data-analysis" onclick="toggleSkill(this)" aria-pressed="false">Data Analysis</button>
                                <button type="button" class="skill-tag" data-skill="digital-marketing" onclick="toggleSkill(this)" aria-pressed="false">Digital Marketing</button>
                                <button type="button" class="skill-tag" data-skill="ui-ux" onclick="toggleSkill(this)" aria-pressed="false">UI/UX Design</button>
                                <button type="button" class="skill-tag" data-skill="content-writing" onclick="toggleSkill(this)" aria-pressed="false">Content Writing</button>
                                <button type="button" class="skill-tag" data-skill="excel" onclick="toggleSkill(this)" aria-pressed="false">Excel</button>
                                <button type="button" class="skill-tag" data-skill="java" onclick="toggleSkill(this)" aria-pressed="false">Java</button>
                                <button type="button" class="skill-tag" data-skill="sql" onclick="toggleSkill(this)" aria-pressed="false">SQL</button>
                            </div>
                            <div class="skills-counter" id="skillsCounter">0 of 5 skills selected</div>
                        </div>
                        <div class="form-error" id="skills-error"></div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="duration">Duration Preference</label>
                        <select 
                            id="duration" 
                            name="duration"
                            class="form-select"
                        >
                            <option value="">Select duration</option>
                            <option value="1-3">1-3 months</option>
                            <option value="3-6">3-6 months</option>
                            <option value="6-12">6-12 months</option>
                            <option value="flexible">Flexible</option>
                        </select>
                    </div>
                    
                    <button type="button" class="btn btn-primary" onclick="generateMatches()" id="findBtn">
                        <span>Find My Internships</span>
                        <span class="sr-only">Generate personalized internship matches</span>
                    </button>
                </form>
            </main>
        </div>

        <!-- Screen 4: Results -->
        <div class="screen" id="results" role="main" aria-label="Your internship matches">
            <header class="header">
                <button class="back-btn" onclick="navigateToScreen('preferences')" aria-label="Go back to preferences">←</button>
                <h1 class="logo">Your Matches</h1>
                <p class="tagline" id="resultsSubtitle">3 perfect matches found</p>
            </header>
            <main class="content">
                <div class="results-header">
                    <div class="results-count">🎉 Great News!</div>
                    <div class="results-subtitle">We found internships that match your profile perfectly</div>
                </div>

                <div id="internshipsList">
                    <!-- Internship cards will be dynamically generated here -->
                </div>

                <button class="btn btn-secondary" onclick="navigateToScreen('preferences')" style="margin-top: 20px;">
                    Refine Search
                </button>
            </main>
        </div>

        <!-- Screen 5: Demo Results -->
        <div class="screen" id="demo" role="main" aria-label="Demo internship results">
            <header class="header">
                <button class="back-btn" onclick="navigateToScreen('welcome')" aria-label="Go back to welcome">←</button>
                <h1 class="logo">Sample Results</h1>
                <p class="tagline">See how it works</p>
            </header>
            <main class="content">
                <div class="demo-notice">
                    <p><strong>Demo Mode:</strong> This shows sample results for a Computer Science student in Delhi with Python and React skills.</p>
                </div>
                
                <article class="internship-card">
                    <div class="card-header">
                        <div class="card-main">
                            <div class="company-logo" aria-hidden="true">TCS</div>
                            <div class="card-content">
                                <h3 class="job-title">Software Development Intern</h3>
                                <div class="company-name">Tata Consultancy Services</div>
                                <div class="location">📍 Delhi NCR</div>
                            </div>
                        </div>
                        <div class="match-score" aria-label="95 percent match">95% Match</div>
                    </div>
                    <div class="card-skills">
                        <span class="skill-badge match">Python</span>
                        <span class="skill-badge match">React</span>
                        <span class="skill-badge">JavaScript</span>
                        <span class="skill-badge">Git</span>
                    </div>
                    <div class="card-description">
                        <strong>Why this matches:</strong> Your Python and React skills align perfectly with our tech stack. Delhi location matches your preference. You'll work on real client projects and learn from senior developers.
                    </div>
                    <div class="card-meta">
                        <div class="card-meta-item">
                            <div class="card-meta-value">₹15,000</div>
                            <div class="card-meta-label">Stipend</div>
                        </div>
                        <div class="card-meta-item">
                            <div class="card-meta-value">6 months</div>
                            <div class="card-meta-label">Duration</div>
                        </div>
                        <div class="card-meta-item">
                            <div class="card-meta-value">Full-time</div>
                            <div class="card-meta-label">Type</div>
                        </div>
                    </div>
                    <button class="apply-btn" onclick="showToast('This is a demo. Create your profile to apply for real internships!')">
                        View Details
                    </button>
                </article>

                <button class="btn btn-primary" onclick="navigateToScreen('profile')">
                    Create Your Profile
                </button>
            </main>
        </div>
    </div>

    <!-- Bottom Navigation -->
    <nav class="bottom-navigation" role="navigation" aria-label="Screen navigation">
        <button class="nav-btn active" onclick="navigateToScreen('welcome')" aria-label="Go to home">Home</button>
        <button class="nav-btn" onclick="navigateToScreen('profile')" aria-label="Go to profile">Profile</button>
        <button class="nav-btn" onclick="navigateToScreen('preferences')" aria-label="Go to preferences">Prefs</button>
        <button class="nav-btn" onclick="navigateToScreen('results')" aria-label="Go to results">Results</button>
    </nav>

    <script>
        // Application State
        const AppState = {
            currentScreen: 'welcome',
            userData: {},
            selectedSkills: new Set(),
            internships: [],
            isLoading: false
        };

        // Sample internship data
        const SAMPLE_INTERNSHIPS = [
            {
                id: 1,
                title: "Software Development Intern",
                company: "Tata Consultancy Services",
                logo: "TCS",
                location: "Delhi NCR",
                skills: ["Python", "React", "JavaScript", "Git"],
                matchingSkills: ["Python", "React"],
                description: "Work on cutting-edge projects in digital transformation. Learn from industry experts and contribute to real client solutions.",
                stipend: "₹15,000",
                duration: "6 months",
                type: "Full-time",
                match: 95
            },
            {
                id: 2,
                title: "Data Analytics Intern",
                company: "Infosys Limited",
                logo: "INF",
                location: "Bangalore",
                skills: ["Python", "Data Analysis", "Excel", "SQL"],
                matchingSkills: ["Python", "Data Analysis"],
                description: "Join our data science team to analyze business patterns and create insights that drive decision-making.",
                stipend: "₹12,000",
                duration: "4 months",
                type: "Full-time",
                match: 88
            },
            {
                id: 3,
                title: "Digital India Initiative",
                company: "Ministry of Electronics & IT",
                logo: "GOV",
                location: "Delhi",
                skills: ["Digital Marketing", "Content Writing", "UI/UX Design"],
                matchingSkills: ["Digital Marketing", "UI/UX Design"],
                description: "Contribute to India's digital transformation by working on citizen-facing digital services and platforms.",
                stipend: "₹10,000",
                duration: "3 months",
                type: "Part-time",
                match: 82
            }
        ];

        // Utility Functions
        const Utils = {
            validateEmail: (email) => {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            },

            validatePhone: (phone) => {
                const re = /^[\+]?[1-9][\d]{9,14}$/;
                return re.test(phone.replace(/\s/g, ''));
            },

            formatPhoneNumber: (phone) => {
                return phone.replace(/\s/g, '').replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3');
            },

            sanitizeInput: (input) => {
                return input.trim().replace(/[<>]/g, '');
            },

            debounce: (func, wait) => {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            }
        };

        // Form Validation
        const Validation = {
            showError: (fieldId, message) => {
                const field = document.getElementById(fieldId);
                const errorDiv = document.getElementById(fieldId + '-error');
                
                field.classList.add('error');
                field.classList.remove('valid');
                errorDiv.textContent = message;
                errorDiv.classList.add('show');
            },

            clearError: (fieldId) => {
                const field = document.getElementById(fieldId);
                const errorDiv = document.getElementById(fieldId + '-error');
                
                field.classList.remove('error');
                field.classList.add('valid');
                errorDiv.classList.remove('show');
            },

            validateField: (fieldId, value, rules) => {
                if (rules.required && !value) {
                    this.showError(fieldId, 'This field is required');
                    return false;
                }

                if (rules.email && value && !Utils.validateEmail(value)) {
                    this.showError(fieldId, 'Please enter a valid email address');
                    return false;
                }

                if (rules.phone && value && !Utils.validatePhone(value)) {
                    this.showError(fieldId, 'Please enter a valid phone number');
                    return false;
                }

                if (rules.minLength && value && value.length < rules.minLength) {
                    this.showError(fieldId, `Minimum ${rules.minLength} characters required`);
                    return false;
                }

                this.clearError(fieldId);
                return true;
            }
        };

        // Screen Management
        function navigateToScreen(screenId) {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
                screen.style.animation = 'none';
            });
            
            // Show target screen with animation
            const targetScreen = document.getElementById(screenId);
            targetScreen.classList.add('active');
            targetScreen.style.animation = 'fadeIn 0.3s ease-in-out';
            
            // Update navigation
            updateNavigation(screenId);
            
            // Update app state
            AppState.currentScreen = screenId;
            
            // Scroll to top
            targetScreen.scrollTop = 0;

            // Announce screen change for screen readers
            announceScreenChange(screenId);
        }

        function updateNavigation(activeScreen) {
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            const screenMap = {
                'welcome': 0,
                'profile': 1,
                'preferences': 2,
                'results': 3,
                'demo': 0
            };
            
            const navBtns = document.querySelectorAll('.nav-btn');
            const activeIndex = screenMap[activeScreen];
            if (navBtns[activeIndex]) {
                navBtns[activeIndex].classList.add('active');
            }
        }

        function announceScreenChange(screenId) {
            const announcements = {
                'welcome': 'Navigated to welcome screen',
                'profile': 'Navigated to profile creation',
                'preferences': 'Navigated to preferences setup',
                'results': 'Navigated to internship results',
                'demo': 'Navigated to demo results'
            };
            
            if (announcements[screenId]) {
                const announcement = document.createElement('div');
                announcement.setAttribute('aria-live', 'polite');
                announcement.setAttribute('aria-atomic', 'true');
                announcement.className = 'sr-only';
                announcement.textContent = announcements[screenId];
                document.body.appendChild(announcement);
                
                setTimeout(() => document.body.removeChild(announcement), 1000);
            }
        }

        // Profile Form Validation and Submission
        function validateAndContinue() {
            const form = document.getElementById('profileForm');
            const formData = new FormData(form);
            let isValid = true;

            // Validate each field
            const fields = [
                { id: 'fullName', rules: { required: true, minLength: 2 } },
                { id: 'email', rules: { required: true, email: true } },
                { id: 'phone', rules: { required: true, phone: true } },
                { id: 'education', rules: { required: true } },
                { id: 'field', rules: { required: true } }
            ];

            fields.forEach(field => {
                const value = formData.get(field.id)?.trim() || '';
                if (!Validation.validateField(field.id, value, field.rules)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                showToast('Please fix the errors above', 'error');
                return;
            }

            // Save data to app state
            AppState.userData.profile = Object.fromEntries(formData.entries());
            
            // Show success and navigate
            showToast('Profile saved successfully!');
            setTimeout(() => navigateToScreen('preferences'), 1000);
        }

        // Skills Management
        function toggleSkill(element) {
            const skill = element.getAttribute('data-skill');
            const isSelected = element.classList.contains('selected');
            
            if (isSelected) {
                // Deselect skill
                element.classList.remove('selected');
                element.setAttribute('aria-pressed', 'false');
                AppState.selectedSkills.delete(skill);
            } else {
                // Check if we can select more skills
                if (AppState.selectedSkills.size >= 5) {
                    showToast('You can select up to 5 skills only', 'error');
                    return;
                }
                
                // Select skill
                element.classList.add('selected');
                element.setAttribute('aria-pressed', 'true');
                AppState.selectedSkills.add(skill);
            }
            
            updateSkillsCounter();
        }

        function updateSkillsCounter() {
            const counter = document.getElementById('skillsCounter');
            const count = AppState.selectedSkills.size;
            counter.textContent = `${count} of 5 skills selected`;
            
            // Update counter color based on selection
            if (count === 0) {
                counter.style.color = 'var(--error-color)';
            } else if (count === 5) {
                counter.style.color = 'var(--success-color)';
            } else {
                counter.style.color = 'var(--gray-500)';
            }
        }

        // Generate Matches
        function generateMatches() {
            const form = document.getElementById('preferencesForm');
            const formData = new FormData(form);
            
            // Validate required fields
            if (AppState.selectedSkills.size === 0) {
                Validation.showError('skills', 'Please select at least one skill');
                showToast('Please select at least one skill', 'error');
                return;
            }
            
            if (!formData.get('location')) {
                Validation.showError('location', 'Please select your preferred location');
                showToast('Please select your preferred location', 'error');
                return;
            }

            // Clear any existing errors
            Validation.clearError('skills');
            Validation.clearError('location');

            // Save preferences
            AppState.userData.preferences = Object.fromEntries(formData.entries());
            AppState.userData.preferences.skills = Array.from(AppState.selectedSkills);

            // Show loading state
            const findBtn = document.getElementById('findBtn');
            findBtn.disabled = true;
            findBtn.innerHTML = '<span>Finding Matches...</span>';
            
            // Simulate API call
            setTimeout(() => {
                const matches = generateInternshipMatches();
                AppState.internships = matches;
                renderInternships(matches);
                
                // Reset button
                findBtn.disabled = false;
                findBtn.innerHTML = '<span>Find My Internships</span>';
                
                // Navigate to results
                navigateToScreen('results');
                showToast(`Found ${matches.length} matching internships!`);
            }, 2000);
        }

        function generateInternshipMatches() {
            const userSkills = AppState.userData.preferences.skills;
            const userLocation = AppState.userData.preferences.location;
            
            // Filter and score internships based on user preferences
            return SAMPLE_INTERNSHIPS
                .map(internship => {
                    let score = 0;
                    const matchingSkills = [];
                    
                    // Calculate skill match (highest weight)
                    internship.skills.forEach(skill => {
                        if (userSkills.some(userSkill => skill.toLowerCase().includes(userSkill.replace('-', ' ')))) {
                            matchingSkills.push(skill);
                            score += 30; // High weight for skill match
                        }
                    });
                    
                    // Location preference (medium weight)
                    if (internship.location.toLowerCase().includes(userLocation) || userLocation === 'remote') {
                        score += 20;
                    }
                    
                    // Base score for government/reputed companies
                    score += 15;
                    
                    // Add some randomization for realistic feel
                    score += Math.floor(Math.random() * 10);
                    
                    return {
                        ...internship,
                        match: Math.min(score, 95),
                        matchingSkills
                    };
                })
                .filter(internship => internship.match > 60)
                .sort((a, b) => b.match - a.match)
                .slice(0, 3);
        }

        function renderInternships(internships) {
            const container = document.getElementById('internshipsList');
            const subtitle = document.getElementById('resultsSubtitle');
            
            subtitle.textContent = `${internships.length} perfect matches found`;
            
            container.innerHTML = internships.map(internship => `
                <article class="internship-card" role="article">
                    <div class="card-header">
                        <div class="card-main">
                            <div class="company-logo" aria-hidden="true">${internship.logo}</div>
                            <div class="card-content">
                                <h3 class="job-title">${internship.title}</h3>
                                <div class="company-name">${internship.company}</div>
                                <div class="location">📍 ${internship.location}</div>
                            </div>
                        </div>
                        <div class="match-score" aria-label="${internship.match} percent match">${internship.match}% Match</div>
                    </div>
                    <div class="card-skills">
                        ${internship.skills.map(skill => `
                            <span class="skill-badge ${internship.matchingSkills.includes(skill) ? 'match' : ''}">${skill}</span>
                        `).join('')}
                    </div>
                    <div class="card-description">
                        ${internship.description}
                    </div>
                    <div class="card-meta">
                        <div class="card-meta-item">
                            <div class="card-meta-value">${internship.stipend}</div>
                            <div class="card-meta-label">Stipend</div>
                        </div>
                        <div class="card-meta-item">
                            <div class="card-meta-value">${internship.duration}</div>
                            <div class="card-meta-label">Duration</div>
                        </div>
                        <div class="card-meta-item">
                            <div class="card-meta-value">${internship.type}</div>
                            <div class="card-meta-label">Type</div>
                        </div>
                    </div>
                    <button class="apply-btn" onclick="applyToInternship(${internship.id})" aria-describedby="apply-desc-${internship.id}">
                        Apply Now
                        <span class="sr-only" id="apply-desc-${internship.id}">Apply for ${internship.title} at ${internship.company}</span>
                    </button>
                </article>
            `).join('');
        }

        // Voice Input Simulation
        function startVoiceInput(fieldId) {
            const button = document.querySelector(`#${fieldId} + .voice-input-btn`);
            const input = document.getElementById(fieldId);
            
            if (button.classList.contains('recording')) {
                return; // Already recording
            }
            
            button.classList.add('recording');
            button.innerHTML = '🔴';
            
            // Simulate voice recognition
            setTimeout(() => {
                button.classList.remove('recording');
                button.innerHTML = '🎤';
                
                // Simulate voice input result
                const sampleInputs = {
                    'fullName': 'Rahul Kumar Sharma',
                    'email': 'rahul.sharma@email.com',
                    'phone': '+91 98765 43210'
                };
                
                if (sampleInputs[fieldId]) {
                    input.value = sampleInputs[fieldId];
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                    showToast('Voice input processed successfully!');
                } else {
                    showToast('Voice input would be processed here in the actual app');
                }
            }, 3000);
        }

        // Application Actions
        function applyToInternship(internshipId) {
            const internship = AppState.internships.find(i => i.id === internshipId);
            if (internship) {
                showToast(`Redirecting to application for ${internship.title}...`);
                
                // Simulate external redirect
                setTimeout(() => {
                    showToast('In a real app, this would redirect to the application portal');
                }, 2000);
            }
        }

        // Toast Notifications
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const icon = toast.querySelector('.toast-icon');
            const text = toast.querySelector('.toast-text');
            
            // Remove existing classes
            toast.classList.remove('error', 'show');
            
            // Set content
            text.textContent = message;
            icon.textContent = type === 'error' ? '❌' : '✓';
            
            // Add appropriate class
            if (type === 'error') {
                toast.classList.add('error');
            }
            
            // Show toast
            toast.classList.add('show');
            
            // Auto-hide after 4 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        }

        // Progressive Web App Features
        function initPWA() {
            // Register service worker
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').catch(() => {
                    console.log('Service worker registration failed');
                });
            }

            // Handle offline status
            window.addEventListener('online', () => {
                showToast('Back online! All features are available.');
            });

            window.addEventListener('offline', () => {
                showToast('You\'re offline. Some features may be limited.', 'error');
            });

            // Install prompt
            let deferredPrompt;
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                
                // Show install banner after user interacts with the app
                setTimeout(() => {
                    if (deferredPrompt) {
                        showInstallPrompt();
                    }
                }, 30000);
            });
        }

        function showInstallPrompt() {
            const installBanner = document.createElement('div');
            installBanner.className = 'toast';
            installBanner.innerHTML = `
                <div class="toast-content">
                    <span class="toast-icon">📱</span>
                    <span class="toast-text">Install RisingPath for quick access!</span>
                    <button onclick="installApp()" style="margin-left: 10px; padding: 5px 10px; border: none; border-radius: 4px; background: var(--primary-color); color: white; cursor: pointer;">Install</button>
                </div>
            `;
            document.body.appendChild(installBanner);
            installBanner.classList.add('show');
            
            setTimeout(() => {
                if (document.body.contains(installBanner)) {
                    installBanner.classList.remove('show');
                    setTimeout(() => document.body.removeChild(installBanner), 300);
                }
            }, 10000);
        }

        function installApp() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        showToast('App installed successfully!');
                    }
                    deferredPrompt = null;
                });
            }
        }

        // Analytics and Performance Monitoring
        function trackEvent(eventName, eventData = {}) {
            // In a real app, this would send data to analytics service
            console.log('Event tracked:', eventName, eventData);
            
            // Example: Track user journey
            if (eventName === 'screen_view') {
                eventData.timestamp = new Date().toISOString();
                eventData.user_agent = navigator.userAgent;
            }
        }

        // Accessibility Enhancements
        function initAccessibility() {
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    // Close any open modals or return to previous screen
                    const currentScreen = AppState.currentScreen;
                    if (currentScreen === 'profile') {
                        navigateToScreen('welcome');
                    } else if (currentScreen === 'preferences') {
                        navigateToScreen('profile');
                    } else if (currentScreen === 'results') {
                        navigateToScreen('preferences');
                    }
                }
            });

            // Focus management
            document.addEventListener('focusin', (e) => {
                if (e.target.classList.contains('skill-tag')) {
                    e.target.style.outline = '2px solid var(--primary-color)';
                }
            });

            document.addEventListener('focusout', (e) => {
                if (e.target.classList.contains('skill-tag')) {
                    e.target.style.outline = 'none';
                }
            });

            // High contrast mode detection
            if (window.matchMedia('(prefers-contrast: high)').matches) {
                document.body.classList.add('high-contrast');
            }

            // Reduced motion preference
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.documentElement.style.setProperty('--transition', 'none');
            }
        }

        // Form Auto-save
        function initAutoSave() {
            const debouncedSave = Utils.debounce((data) => {
                try {
                    const saved = JSON.parse(localStorage.getItem('risingpath_draft') || '{}');
                    Object.assign(saved, data);
                    localStorage.setItem('risingpath_draft', JSON.stringify(saved));
                } catch (e) {
                    console.warn('Auto-save failed:', e);
                }
            }, 1000);

            // Save profile form data
            const profileInputs = document.querySelectorAll('#profileForm input, #profileForm select');
            profileInputs.forEach(input => {
                input.addEventListener('input', () => {
                    const formData = new FormData(document.getElementById('profileForm'));
                    debouncedSave({ profile: Object.fromEntries(formData.entries()) });
                });
            });

            // Save preferences form data
            const preferencesInputs = document.querySelectorAll('#preferencesForm input, #preferencesForm select');
            preferencesInputs.forEach(input => {
                input.addEventListener('input', () => {
                    const formData = new FormData(document.getElementById('preferencesForm'));
                    debouncedSave({ 
                        preferences: Object.fromEntries(formData.entries()),
                        skills: Array.from(AppState.selectedSkills)
                    });
                });
            });
        }

        function loadAutoSavedData() {
            try {
                const saved = JSON.parse(localStorage.getItem('risingpath_draft') || '{}');
                
                if (saved.profile) {
                    Object.entries(saved.profile).forEach(([key, value]) => {
                        const field = document.getElementById(key);
                        if (field && value) {
                            field.value = value;
                        }
                    });
                }

                if (saved.preferences) {
                    Object.entries(saved.preferences).forEach(([key, value]) => {
                        const field = document.getElementById(key);
                        if (field && value) {
                            field.value = value;
                        }
                    });
                }

                if (saved.skills) {
                    saved.skills.forEach(skill => {
                        const skillElement = document.querySelector(`[data-skill="${skill}"]`);
                        if (skillElement) {
                            skillElement.classList.add('selected');
                            skillElement.setAttribute('aria-pressed', 'true');
                            AppState.selectedSkills.add(skill);
                        }
                    });
                    updateSkillsCounter();
                }
            } catch (e) {
                console.warn('Failed to load auto-saved data:', e);
            }
        }

        // Performance Optimization
        function initPerformanceOptimizations() {
            // Lazy load images
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.removeAttribute('data-src');
                                imageObserver.unobserve(img);
                            }
                        }
                    });
                });

                document.querySelectorAll('img[data-src]').forEach(img => {
                    imageObserver.observe(img);
                });
            }

            // Preload next screen resources
            const linkPrefetch = document.createElement('link');
            linkPrefetch.rel = 'prefetch';
            linkPrefetch.href = '/api/internships'; // In real app, this would be actual API endpoint
            document.head.appendChild(linkPrefetch);
        }

        // Error Handling and Logging
        function initErrorHandling() {
            window.addEventListener('error', (e) => {
                console.error('Application error:', e.error);
                showToast('Something went wrong. Please try again.', 'error');
                
                // In production, send error to logging service
                trackEvent('error', {
                    message: e.message,
                    filename: e.filename,
                    lineno: e.lineno,
                    colno: e.colno,
                    stack: e.error?.stack
                });
            });

            window.addEventListener('unhandledrejection', (e) => {
                console.error('Unhandled promise rejection:', e.reason);
                showToast('Something went wrong. Please try again.', 'error');
                
                trackEvent('unhandled_promise_rejection', {
                    reason: e.reason?.toString()
                });
            });
        }

        // Application Initialization
        function initApp() {
            // Show loading screen
            const loadingScreen = document.getElementById('loadingScreen');
            const appContainer = document.getElementById('appContainer');
            
            // Initialize all features
            initPWA();
            initAccessibility();
            initAutoSave();
            initPerformanceOptimizations();
            initErrorHandling();
            
            // Load auto-saved data
            loadAutoSavedData();
            
            // Real-time form validation
            setupRealTimeValidation();
            
            // Hide loading screen after initialization
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                appContainer.style.opacity = '1';
                trackEvent('app_loaded');
            }, 1500);

            // Track initial screen view
            trackEvent('screen_view', { screen: 'welcome' });
        }

        function setupRealTimeValidation() {
            // Real-time email validation
            const emailInput = document.getElementById('email');
            emailInput?.addEventListener('input', Utils.debounce((e) => {
                const value = e.target.value.trim();
                if (value && !Utils.validateEmail(value)) {
                    Validation.showError('email', 'Please enter a valid email address');
                } else if (value) {
                    Validation.clearError('email');
                }
            }, 500));

            // Real-time phone validation
            const phoneInput = document.getElementById('phone');
            phoneInput?.addEventListener('input', Utils.debounce((e) => {
                const value = e.target.value.trim();
                if (value && !Utils.validatePhone(value)) {
                    Validation.showError('phone', 'Please enter a valid phone number');
                } else if (value) {
                    Validation.clearError('phone');
                    // Format phone number
                    e.target.value = Utils.formatPhoneNumber(value);
                }
            }, 500));

            // Real-time name validation
            const nameInput = document.getElementById('fullName');
            nameInput?.addEventListener('input', (e) => {
                const value = e.target.value.trim();
                if (value && value.length < 2) {
                    Validation.showError('fullName', 'Name must be at least 2 characters long');
                } else if (value) {
                    Validation.clearError('fullName');
                }
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Number keys for quick navigation
            if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '4') {
                e.preventDefault();
                const screens = ['welcome', 'profile', 'preferences', 'results'];
                const screenIndex = parseInt(e.key) - 1;
                if (screens[screenIndex]) {
                    navigateToScreen(screens[screenIndex]);
                }
            }
        });

        // Initialize application when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initApp);
        } else {
            initApp();
        }

        // Export functions for testing (in development)
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = {
                Utils,
                Validation,
                AppState,
                navigateToScreen,
                generateInternshipMatches
            };
        }
    </script>

    <!-- Service Worker for PWA (inline for deployment) -->
    <script>
        // Simple service worker for basic caching
        const SW_VERSION = 'risingpath-v1.0.0';
        const CACHE_NAME = `risingpath-${SW_VERSION}`;
        const URLS_TO_CACHE = [
            '/',
            '/index.html',
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        ];

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('data:application/javascript;base64,' + btoa(`
                const CACHE_NAME = '${CACHE_NAME}';
                const URLS_TO_CACHE = ${JSON.stringify(URLS_TO_CACHE)};

                self.addEventListener('install', (event) => {
                    event.waitUntil(
                        caches.open(CACHE_NAME)
                            .then((cache) => cache.addAll(URLS_TO_CACHE))
                    );
                });

                self.addEventListener('fetch', (event) => {
                    event.respondWith(
                        caches.match(event.request)
                            .then((response) => {
                                return response || fetch(event.request);
                            }
                        )
                    );
                });
            `))
            .then(() => console.log('Service Worker registered'))
            .catch(() => console.log('Service Worker registration failed'));
        }
    </script>
</body>
</html>