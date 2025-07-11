import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        session: {
            isDev: false,
            useGw: false,
            baseUrl: 'https://api.ibkr.com/v1/api',
            gwBaseUrl: 'https://localhost:5000/v1/api'
        },
        settings: {
            machineId: 'CCCCCCCC',
            mac: '48-DF-37-57-33-80'
        },
        credentials: {
            consKey: 'DEVKOIZAI',
            realm: 'test_realm',
            accessToken: '97d7c844b8a8cc7d9768',
            liveSessionToken: ''
        },
        oauth: {
            requestToken: '',
            verifier: '',
            tokenSecret: 'ZyKvslalUL9ss6jFIPPMqQnHmbg3kxgqRLkK9xFkDbutNqQfi164Laf1DpOzCiR7gNqD7lXhQITwff0gvXjq2CkHrVxglKALSWWs6uBUbg+NfzxMOOcCCv5BFpEjt/Pr/mJW4srotaQYTDDzGc54/ZMixhXX8CAAeW9ZDcJCCi57fu+s2jAsqzsaR2eAfbZjFYl3GEMpyYJAh5DEh8l4NHHneGnVAg/ZRZafgANc924pCfhQOf5TSsKc9JT48bzJcD/64y/kCTrnD2XCw5BlIL7d2ZrgQjAQ5uGB4aC8zzR2ZSP2S72yhB4ecqCJWFI8j2/nsnxyG3ocd+3rUdSSPg=='
        },
        keys: {
            privateSigningKey: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDJfacZ6tBRamK3
Nzr/YCCuLgJvNvx7Vy2EOmdHfLz3wpdc7C4i5/d0gmN11uDZsJ8isA2Sxzdzaqy6
zcWcRx/nQ9INif0W77upZ+49wPlbsS1/GrgaQNqjRqkWfCBj/STOG54c8/orJNSx
p21qzYHTOULIoT+n/JH6yDtVrKoxlxcTWwaTiQA/ScXF5ov8SAskMbrcmDWGirEy
U0BVyJzvUlRNTFs5AfFfeCmMibb2SWgWlzYWy8dqRGmLa/+IeB7Z6Anr3QofSEv7
aCCEVLIdO8ZbF5qxMBAA8+VGglEy8z3psFRpal3vn34F6Ytl4YjVT2bJHuG6hTvK
sP5PuOstAgMBAAECggEADU8O6rUqCw6nXum3gbxu5te5fRtuhD5xuQ0F2wt1YeTJ
DFq6AL/osO9B3uaRazTxi0rXWALE+gspm0cnOSzbgceRiCe9VLauDcEEfrC7PSAQ
B21o4VcM+gGbU+sL//7DCm15kqOs5Qz66Dx3tjkad6y4aWR5PhZ+lUgvic0CCuIN
Xm2z7ivAqI6m5xAY2zXaKfgXQYPESsdCxQwcVTkhAdWd3W06Z4z96x+uDAsZfbns
z/miifNwpncirb+WTkOKHcojWdUMNuy4lr9aQxIec9G7tQaeDm95+2NIaZyqIR7t
debHUrpgY1yaqaoE3bMChc0o/XMqjuSgAtiKQUpOgwKBgQD23TSdreWwP6SKyXls
Q4unT1Gzz7fOoOwfp1ufW5h4JuUd+Gi6Q1W3c4J/2TH+kM9vtxxdfVhA47xZoW09
hM4oc9jr+V8HpczIhs0gPQt4fL0x9ZcchV6aRAhiJ1CprI9yCV9dnWCPUSAZTLzf
Y8ZPbEvsIV0+uEJGR6hGsUf5PwKBgQDQ8pSLJUUTZyYTVLhGGBWJ4L8xRNHxti/1
EHWeygWrMliNIl6i+Tyu7hAlkoMgNE7RD83OdkPkuADnIBTGGoo2WOA4ybZlMqDy
f9rmRaCZwowSTnBBKDBpUSyJaBZWgh5ffuGulraaOmqTR2a77t+/XqTKkHxvP9po
en7SBjw0kwKBgQDRpPnSDqRJEUNDOeaMMrCe3ZWdBoIqUC82koIUy0yofR+GXDdU
N2rL6KSivmjer0v6q57DJneUY9LIq3aCEA6j+/30KEqzy/IlOZVqE21yXTyu+Mnj
xr+Ycr5L3Od7sLgBOERs1AH0tAh2c9zSOYFoYaf4WD0/zms6FBCsOFHPMQKBgQCh
79+AF9p5NzAjOz211WSb/zsujA/KLVDttVvzPM8350UJ3OFLna6SRJ7u/6Xwh5mu
HXl70dy8nn7UoeB3yInlpOviFzLtK1fhmYWlgcD+afD1HyWQ2fzrIqZJuAnX8fBo
QoXWMahDz5JZorTUYkW2oztEYsaN0gcLgiRX0c1HUQKBgA4N6KMVvOgbpKKthLs6
K9aOLMlBSaDBFLm3YZL+htDlfhmlVWqPWj42qMIaqyOHrR9PfNTUYIeeoJ/CdnJu
rCJELz/5eG8Rxl7Yry71S6slZ/c2cpTfPQlXaCdBj2R5I7kIo16nIsBsR77ngU3N
xzhveIgPaO2JNBC45918sVWD
-----END PRIVATE KEY-----`,
            privateEncryptionKey: `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCbJQI0mWSp5R0g
2V2oT/njNiIEDOafrIdYrgr3b1pPgmrr8fRGR0njfjcNKypr+3ERT1y/qEm6vhfQ
jXmrXsyHmOdDH76OA615g3Qcu+1lcFMXN2tmgESnZ9Km0NreFBOPKeQoFVLd04EB
rXWE3DT+K1g9zoYHzjSmMXuUo9Oqd9Wjdr0vm/uq8AaUhDwyDNAXPcR4SsnnnXTM
olCDQZg5ZvujCFpu2L9xK0ZqPy/ayWxynz4LBZ4lPR11EYcAzdSYSsQwHXr34pcg
huHWVglrtdxSsgFJ43hiN0KLpk0ikYWEHR1BNJXL2M3iD76sIWCEXv0V7+XMVXIs
GJ26KmitAgMBAAECggEAGfbfn53sUuKdNVorane4AmaU2sit8BsXq6e0/iQMoTHa
YxJjJz/XBdOhsvp+ZwP1sEfv5cNsU2xs3+JNcnizEh5s1bcCVRIYfjWZwRVSbZ+W
yFPmDYl58+pUPsbFWlVR0KvaGzs2WxmChZ1aBZo05DSs1+swUy4XcZjmbcHdMrII
wi/9VEQrOi4oyC4beS46g2SusJarMsbRLBxKCNSsRRS9Bz2B3Vp2ZRBFRwRKeOn9
w5NeC5aGRpxsz22BipezN6qI8MjXm+zhI4xLHUlhw0j44GPrn6Wa2ND+5m0Gkq3S
gHpAVL4SXnFsLJPKx7xkwtY0csCQ2QY4MMskh4bEoQKBgQDH6qHIRW2ifaRs6gnV
71j5wTtPLTCPhzd1g91+Q/hav+NpbiAi9/7LWLPXmbNDKoIbuZoo6nuU+2J5fMpl
Yt6OMttd1ZyilqrZ18+uko16JH1wtiguoU0UrBWXR90fWEoujxMpxCvRAkDDbn8Z
+boUbK1GJL2grBMLw373Bb2QhwKBgQDGqv8q9zeCe1BizrqMLq7lbD+nxdeqYLmO
zrW9ZrcaJIfRCkZM3vFks6qKd3EwKVvizGmwgbdd0Ri9dhOSlVD7uJSLP2L1xWJh
l5LR8bTJ/NcKG/WoAIGa1QnGWnmEb/zm9jwpSeisOJtXPfnI1tWL+HEf2/q6ifeu
gerAmOZOKwKBgDVgZhWsw9rwpOgXjMy7/QuiFg3LyP1pYttTe93sk/DW7wcFSjtL
75Gne00DUqOKQ/bXFVv7T0e13tMFCJ0NStK4rW1eTVXz2GYVgvPfWTrVZ1CishPR
KV1tnM4pd9aYoiXQOZObNv+1FEmZxQHQdWhio9jokmDF0MgBSHL362cdAoGAEPXq
QOXIJGiYrUbO4EbgAZAjQxR92/rT/KAjHd9WBHJX8f25kLh7zUgVaCrYS+9L++nN
oBcC64x9WzdoZlw/BK52aAjqTuciBgjlrOzArXnbde57I3OfnPNRGVECDM9uvN0K
t8+qgIF4qZMN7xqAMqnsJncmSaSbs5c9zmF/T+8CgYBZRTgX0AKquIszppgvVdCW
Zsdv9z5DnsYKCH10NKDCN+sNgcAgWhP1sARpFS3ovdV7jTSoL3zPqSdPQ9TNSJ0t
nLE3hyOazOroObFZOLmjpGQIRyA2Pn8YGN6R7Fv1HCpweFJKZoJjpipxqLKMqKgT
Hv5lo/XJw2vo810x72+5Zw==
-----END PRIVATE KEY-----`,
            generator: 2,
            prime: `\
D7108261A57F0B02B862CDD9B58F7CE82426F925CEF4FE0C65B41E4E7DA\
1F4A8E3C52920081B1812908DFCBCFA2FAAB0F27E5C0601EB2BAB9C31B4\
763794B0B6B9743BA2232BE8777397E8AEE14B7F2D243BE165A22A800A5\
63270E5541B2E65F26E7B603A53D0DA136D39642932600E4E1B5EFBDCA1\
674D5F2BFFBB5018DC74A808C387DC4E6CF7A956778A92BA9BCAB29F691\
5621850B4D81757C79790D0F015CAB821D3DAFA40158D00A633CFC066C5\
CD6C448897F2C077C8478E60A08BFB6CC9BBA78F6DE139233B334A66DF9\
3B67A3DB88F292178F0C8230B89C26039789C613490465AD51F565C51DE\
5203862918F32464B603CC83CCC1BD1A04BF08D7\
`
        },
        output: {
            value: ''
        }
    }
});
