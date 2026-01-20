import React, { useState, useEffect, useRef } from 'react';
import pannellum from 'pannellum';
import 'pannellum/build/pannellum.css';

/**
 * PanoramaViewer component for 360° property views
 * Uses Pannellum library for panoramic image display
 * Automatically proxies external images via backend to avoid CORS issues
 */
const PanoramaViewer = ({
    imageUrl,
    title = "360° Property View",
    height = '400px'
}) => {
    const [loading, setLoading] = useState(true);
    const [processedUrl, setProcessedUrl] = useState(null);
    const [error, setError] = useState(false);
    const containerRef = useRef(null);
    const viewerRef = useRef(null);
    const containerId = useRef(`panorama-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);

    // Process Image URL (Proxy if needed)
    useEffect(() => {
        if (!imageUrl) {
            setLoading(false);
            return;
        }

        const processImage = async () => {
            // If local or data URL, use directly
            if (imageUrl.startsWith('data:') || imageUrl.startsWith('/') || imageUrl.includes('localhost')) {
                setProcessedUrl(imageUrl);
                return;
            }

            // External URL - Proxy it
            try {
                console.log("Proxying 360 image:", imageUrl);
                const response = await fetch('/api/images/proxy-360', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url: imageUrl })
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.localUrl) {
                        setProcessedUrl(data.localUrl);
                    } else {
                        // Fallback
                        setProcessedUrl(imageUrl);
                    }
                } else {
                    console.warn("Proxy failed, using original.");
                    setProcessedUrl(imageUrl);
                }
            } catch (err) {
                console.error("Proxy error:", err);
                setProcessedUrl(imageUrl); // Try original anyway
            }
        };

        processImage();
    }, [imageUrl]);


    // Initialize viewer when url is ready
    useEffect(() => {
        if (!processedUrl) {
            return;
        }

        // Cleanup previous viewer
        if (viewerRef.current) {
            try {
                viewerRef.current.destroy();
            } catch (e) { }
            viewerRef.current = null;
        }

        // Initialize after a short delay to ensure DOM is ready
        const initTimer = setTimeout(() => {
            const container = document.getElementById(containerId.current);
            if (!container) {
                return;
            }

            try {
                viewerRef.current = pannellum.viewer(containerId.current, {
                    type: 'equirectangular',
                    panorama: processedUrl,
                    autoLoad: true,
                    autoRotate: -2,
                    compass: true,
                    showControls: true,
                    showFullscreenCtrl: true,
                    showZoomCtrl: true,
                    hfov: 110,
                    pitch: 0,
                    yaw: 0,
                    title: title,
                    author: 'BuildEx',
                    hotSpotDebug: false
                });

                // Force check loading state
                // Pannellum doesn't emit 'load' reliably for equirectangular sometimes
                setTimeout(() => setLoading(false), 1000);

                viewerRef.current.on('load', () => {
                    setLoading(false);
                });

                viewerRef.current.on('error', (err) => {
                    console.error("Pannellum error:", err);
                    setError(true);
                    setLoading(false);
                });

            } catch (e) {
                console.error('Pannellum init error:', e);
                setError(true);
                setLoading(false);
            }
        }, 100);

        return () => {
            clearTimeout(initTimer);
            if (viewerRef.current) {
                try {
                    viewerRef.current.destroy();
                } catch (e) { }
                viewerRef.current = null;
            }
        };
    }, [processedUrl, title]);

    if (!imageUrl) {
        return (
            <div style={{
                height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                borderRadius: '16px',
                border: '2px solid rgba(200,162,74,0.3)'
            }}>
                <div className="text-center p-4">
                    <i className="bi bi-camera-video-off" style={{
                        fontSize: '3rem',
                        color: '#64748B',
                        marginBottom: '16px',
                        display: 'block'
                    }}></i>
                    <p style={{ color: '#64748B', margin: 0 }}>
                        No 360° view available for this property
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="panorama-viewer-wrapper" style={{ position: 'relative' }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                background: 'linear-gradient(90deg, rgba(200,162,74,0.1), rgba(200,162,74,0.05))',
                borderRadius: '16px 16px 0 0',
                border: '2px solid rgba(200,162,74,0.3)',
                borderBottom: 'none'
            }}>
                <div className="d-flex align-items-center">
                    <i className="bi bi-badge-vr me-2" style={{ color: '#C8A24A', fontSize: '1.5rem' }}></i>
                    <span style={{ color: '#F8FAFC', fontWeight: '600' }}>{title}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                    <i className="bi bi-mouse me-1"></i>
                    Drag to look around
                </div>
            </div>

            <div
                id={containerId.current}
                ref={containerRef}
                style={{
                    height,
                    width: '100%',
                    borderRadius: '0 0 16px 16px',
                    overflow: 'hidden',
                    border: '2px solid rgba(200,162,74,0.3)',
                    borderTop: 'none',
                    background: '#0F172A',
                    position: 'relative'
                }}
            >
                {/* Loading overlay */}
                {loading && (
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                        background: 'rgba(15,23,42,0.9)', zIndex: 100
                    }}>
                        <div style={{
                            width: '50px', height: '50px',
                            border: '3px solid rgba(200,162,74,0.3)',
                            borderTop: '3px solid #C8A24A',
                            borderRadius: '50%',
                            animation: 'panSpin 1s linear infinite'
                        }}></div>
                        <p style={{ color: '#64748B', marginTop: '16px', fontSize: '0.9rem' }}>Loading 360° view...</p>
                        <style>{`@keyframes panSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                )}
                {/* Error state */}
                {error && (
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                        padding: '24px', background: '#0F172A', zIndex: 100
                    }}>
                        <i className="bi bi-exclamation-triangle" style={{ fontSize: '3rem', color: '#F59E0B', marginBottom: '16px' }}></i>
                        <p style={{ color: '#64748B', textAlign: 'center', margin: 0 }}>
                            Unable to load 360° view.<br />
                            Please check if the image is valid.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PanoramaViewer;
