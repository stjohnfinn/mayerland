IDFile = open('id_list.txt', 'w+')

spotifyLink = input('Enter Spotify Link: ')

while spotifyLink != '-1':
    IDFile.write("'" + spotifyLink[31:53] + "',")
    spotifyLink = input('Enter Spotify Link: ')

print('Finished.')
IDFile.close()