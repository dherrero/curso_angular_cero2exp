export type keyString = {
    [key: string]: string;
};
export type artist = {
    external_urls: keyString;
    href: string;
    id: string;
    name: string;
    type: 'artist';
    uri: string;
};
export type image = {
    height: number;
    url: string;
    width: number;
}
export type album = {
    album_type: string;
    artists: artist[];
    available_markets: string[];
    external_urls: keyString;
    href: string;
    id: string;
    images: image[];
    name: string;
    release_date: Date;
    release_date_precision: string;
    total_tracks: number;
    type: 'album';
    uri: string;
}